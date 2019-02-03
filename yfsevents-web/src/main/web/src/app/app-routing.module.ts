import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list.component';
import { AddEventComponent } from './events/add-event.component';

const routes: Routes = [
{path:'events',component:EventListComponent},
{path:'addevent',component:AddEventComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
