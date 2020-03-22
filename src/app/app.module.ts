import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookComponent } from './book-list/book.component';
import { Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { BookingPersonalComponent } from './booking-personal/booking-personal.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BookService} from './services/book.service';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'bookForm', component: BookFormComponent},
  { path: 'bookList', component: BookComponent  },
  { path: 'bookDetail', component: BookDetailComponent  },
  { path: 'bookingForm', component: BookingFormComponent  },
  { path: 'myBooking', component: BookingPersonalComponent  },
  { path: 'memberForm', component: MemberFormComponent },
  { path: 'memberList', component: MemberListComponent  },
  { path: 'memberDetail', component: MemberDetailComponent },
  { path: 'authentication', component: AuthenticationComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookFormComponent,
    BookDetailComponent,
    BookingFormComponent,
    MemberListComponent,
    MemberFormComponent,
    BookingPersonalComponent,
    MemberDetailComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    NgbCollapseModule,
    ReactiveFormsModule,
  ],
  providers: [BookService,
  HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
