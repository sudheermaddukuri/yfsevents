import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { AddEventComponent } from './events/add-event.component';
import {VolunteerComponent}  from './volunteer/volunteer.component';

const routes: Routes = [
{path:'events',component:EventListComponent},
{path:'addevent',component:AddEventComponent},
{path:'volunteer',component:VolunteerComponent}
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
