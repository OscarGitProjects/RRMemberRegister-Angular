import { Member } from "./member";
import { Component, OnInit, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-members',
  templateUrl: './member-edit-component.html'
})
export class MemberEditComponent implements OnInit {
  pageTitle: string = "Uppdatera medlemens uppgifter"
  url: string = "";

  member: Member;

  //paramIdNumber: number;

  // Används för att kunn visa lämpligt meddelande
  // När det gick att uppdatera medlemens information returneras medlemens id
  messageTyp: number = 0; // -1 = fel. Värde över 0 indikerar att uppdateringen gick bra. 
  message: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');

    //this.paramIdNumber = parseInt(paramId);

    this.http.get(this.url + 'api/Member/' + paramId)
      .subscribe(result => {
        this.member = result as Member;
      }, error => console.error(error));
  }

  onSubmit(form: NgForm) {

    //console.log('Your form data : ', form.value);

    this.http.put(this.url + 'api/Member/' + form.value.id, form.value)
      .subscribe(result => {
        this.messageTyp = result as number;

        if (this.messageTyp == -1) {
          this.message = "Gick inte uppdatera medlem";
        }
        else if (this.messageTyp > 0) {
          this.message = "Har uppdaterat informationen om medlem";
        }
      }, error => console.error(error));
  }
}
