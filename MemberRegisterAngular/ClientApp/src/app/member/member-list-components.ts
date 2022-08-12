import { OnInit, Component, Inject } from "@angular/core";
import { Member } from "./member";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list-members',
  templateUrl: './member-list-component.html'
})
export class MemberListComponent implements OnInit {
  pageTitle: string = "Lista medlemmar";

  url: string = "";

  members: Member[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  ngOnInit(): void
  {
    this.http.get(this.url + 'api/Member')
      .subscribe(result => {
        this.members = result as Member[];
      }, error => console.error(error));    
  }
}
