import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule}from '@angular/http';
import { InventoryDataComponent } from './inventory-data/inventory-data.component';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { InventoryListComponent } from './inventory-data/inventory-list.component';
import { CollegeListComponent } from './college-registration/college-list.component';
import { PartnerNgoGridComponent } from './partner-ngo-grid/partner-ngo-grid.component';
import { CollegeRegistrationGridComponent } from './college-registration-grid/college-registration-grid.component';
import {LoginComponent}from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UrlPermission }from "./urlPermission/url.permission";
import {UserService}from "./services/user.service";
import {AuthService}from "./services/auth.service";


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
LoginComponent,
RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AgGridModule.withComponents([]),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    AngularMultiSelectModule,
    HttpModule
  ],
  providers: [AuthService, UserService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
