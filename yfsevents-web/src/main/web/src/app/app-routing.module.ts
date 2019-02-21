import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PartnerNGOComponent } from './partner-ngo/partner-ngo.component';
import { EventListComponent } from './events/event-list.component';
import { AddEventComponent } from './events/add-event.component';
import {VolunteerComponent}  from './volunteer/volunteer.component';

const routes: Routes = [
  {
    path: 'partnerngo', component: PartnerNGOComponent
  },
  {path:'events',component:EventListComponent},
  {path:'addevent',component:AddEventComponent},
  {path:'volunteer',component:VolunteerComponent},
  {
    path: '**', component: AppComponent
    //to-do: update route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
