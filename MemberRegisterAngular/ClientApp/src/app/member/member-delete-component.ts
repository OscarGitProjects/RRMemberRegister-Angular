import { OnInit, Component, Inject } from "@angular/core";
import { Member } from "./member";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-members',
  templateUrl: './member-list-component.html'
})
export class MemberDeleteComponent implements OnInit {
  pageTitle: string = "Radera medlemen";

  url: string = "";

  members: Member[];

  messageTyp: number = 0; // 0 = not set,  1 = success, 2 = danger
  message: string = "";

  constructor(private http: HttpClient, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  ngOnInit(): void
  {
    const paramId = this.route.snapshot.paramMap.get('id');

    /* Radera medlemen */ 
    this.http.delete(this.url + 'api/Member/' + paramId)
      .subscribe(result => {
        this.messageTyp = result as number;

        if (this.messageTyp == -1) {
          this.message = "Gick inte radera medlem";
        }
        else if (this.messageTyp > 0) {
          this.message = "Raderade medlem";
        }

        /* Hämta alla medlemmar */
        this.http.get(this.url + 'api/Member')
          .subscribe(result => {
            this.members = result as Member[];
          }, error => console.error(error));
      }, error => console.error(error));
  }
}
