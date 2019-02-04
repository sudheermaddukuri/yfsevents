import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PartnerNGOComponent } from './partner-ngo/partner-ngo.component';

const routes: Routes = [
  {
    path: 'partnerngo', component: PartnerNGOComponent
  },
  {
    path: '**', component: AppComponent
    //to-do: update route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
