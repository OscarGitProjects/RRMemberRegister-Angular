import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MemberListComponent } from './member/member-list-components';
import { MemberDetailComponent } from './member/member-detail-component';
import { MemberDeleteComponent } from './member/member-delete-component';
import { MemberCreateComponent } from './member/member-create-component';
import { MemberEditComponent } from './member/member-edit-component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberDeleteComponent,
    MemberCreateComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'member-list', component: MemberListComponent },
      { path: 'member-detail/:id', component: MemberDetailComponent },
      { path: 'member-delete/:id', component: MemberDeleteComponent },
      { path: 'member-create', component: MemberCreateComponent },
      { path: 'member-edit/:id', component: MemberEditComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
