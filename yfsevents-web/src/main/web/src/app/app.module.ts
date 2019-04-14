 import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnerNGOComponent } from './partner-ngo/partner-ngo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventListComponent } from './events/event-list.component';
import { AddEventComponent } from './events/add-event.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { InventoryDataComponent } from './inventory-data/inventory-data.component';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { InventoryListComponent } from './inventory-data/inventory-list.component';
import { CollegeListComponent } from './college-registration/college-list.component';
import { PartnerNgoGridComponent } from './partner-ngo-grid/partner-ngo-grid.component';
import { CollegeRegistrationGridComponent } from './college-registration-grid/college-registration-grid.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UrlPermission } from './urlPermission/url.permission';
import {UserService} from './services/user.service';
import {AuthService} from './services/auth.service';
import {AppService} from './app.service';
import {VolunteerGridComponent} from './volunteer-grid/volunteer-grid.component';
//import{EventEmiterService} from './event-emmiter-service1.service';
import { ButtonRendererComponent } from './events/renderer/button-renderer.component';
import { XhrInterceptor } from './xhrInterceptor';
@NgModule({
declarations: [
AppComponent,
PartnerNGOComponent,
HeaderComponent,
FooterComponent,
EventListComponent,
AddEventComponent,
VolunteerComponent,
InventoryDataComponent,
CollegeRegistrationComponent,
SendMailComponent,
WelcomeComponent,
    InventoryListComponent,
    CollegeListComponent,
    PartnerNgoGridComponent,
    CollegeRegistrationGridComponent,
  VolunteerGridComponent,
  LoginComponent,
RegisterComponent,
ButtonRendererComponent
  ],
  imports: [
    AgGridModule.withComponents([ButtonRendererComponent]),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AgGridModule.withComponents([]),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    AngularMultiSelectModule,
    HttpModule
  ],

  schemas:[NO_ERRORS_SCHEMA],
  providers: [AuthService, UserService, UrlPermission, AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],

  bootstrap: [AppComponent]
})
export class AppModule { }

