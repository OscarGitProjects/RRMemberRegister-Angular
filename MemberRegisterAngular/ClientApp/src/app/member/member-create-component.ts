import { OnInit, Component, Inject } from "@angular/core";
import { Member } from "./member";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-create-members',
    templateUrl: './member-create-component.html'
  })
export class MemberCreateComponent implements OnInit
{
    pageTitle: string = "Skapa medlem";

    url: string = "";
  
    members: Member[];

    // Används för att kunn visa lämpligt meddelande
    // När det gick att uppdatera medlemens information returneras medlemens id
    messageTyp: number = 0; // -1 = fel. Värde över 0 indikerar att uppdateringen gick bra. 
    message: string = "";

    constructor(private http: HttpClient, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
      this.url = baseUrl;
    }    
        
    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
      //console.log('Your form data : ', form.value);

      this.http.post(this.url + 'api/Member', form.value)
        .subscribe(result => {
          this.messageTyp = result as number;

          if (this.messageTyp == -1) {
            this.message = "Gick inte skapa medlem";
          }
          else if (this.messageTyp > 0) {
            this.message = "Har skapat en ny medlem";
          }

        }, error => console.error(error));
    }
}
