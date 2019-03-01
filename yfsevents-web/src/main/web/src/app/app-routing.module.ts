import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PartnerNGOComponent } from './partner-ngo/partner-ngo.component';
import { EventListComponent } from './events/event-list.component';
import { AddEventComponent } from './events/add-event.component';
import {VolunteerComponent}  from './volunteer/volunteer.component';
import { InventoryDataComponent } from './inventory-data/inventory-data.component';
import { CollegeRegistrationComponent } from './college-registration/college-registration.component';
import {SendMailComponent} from "./send-mail/send-mail.component";
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'collegeregistration', component: CollegeRegistrationComponent
  },
  {
    path: 'inventorydata', component: InventoryDataComponent
  },
  {
    path: 'partnerngo', component: PartnerNGOComponent
  },
  {path:'events',component:EventListComponent},
  {path:'addevent',component:AddEventComponent},
  {path:'volunteer',component:VolunteerComponent},
  {
    path:'email',component:SendMailComponent
  },
  {
  
    path: '**', component: WelcomeComponent
    //to-do: update route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
