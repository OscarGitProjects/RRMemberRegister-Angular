import { OnInit, Component, Inject } from "@angular/core";
import { Member } from "./member";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-details-member',
    templateUrl: './member-detail-component.html'
})
export class MemberDetailComponent implements OnInit{
  pageTitle: string = "Detaljer för"
  url: string = "";

  member: Member;

  constructor(private http: HttpClient, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  ngOnInit(): void
  {
    const paramId = this.route.snapshot.paramMap.get('id');

    this.http.get(this.url + 'api/Member/' + paramId)
      .subscribe(result => {
        this.member = result as Member;
      }, error => console.error(error));
  }
}
