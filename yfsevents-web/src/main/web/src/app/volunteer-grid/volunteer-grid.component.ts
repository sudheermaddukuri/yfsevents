
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {ngDevModeResetPerfCounters}from '@angular/core/src/render3/ng_dev_mode';
import { JsonPipe}from '@angular/common';

@Component({
  selector: 'app-volunteer-grid',
  templateUrl: './volunteer-grid.component.html',
  styleUrls: ['./volunteer-grid.component.css']
})
export class VolunteerGridComponent implements OnInit {

 private data:any=[];
   private headers=[
     {headerName: 'First Name', field: 'firstName',filter:true, sortable: true },
     {headerName: 'Last Name', field: 'lastName',filter:true},
     {headerName: 'Phone Prefix', field: 'phonePrefix',filter:true},
     {headerName: 'Phone Number', field: 'phoneNumber',filter:true},
     {headerName: 'Phone Prefix', field: 'alternatePhonePrefix',filter:true},
     {headerName: 'Alternate Phone Number', field: 'alternatePhoneNumber',filter:true},
     {headerName: 'EmailId', field: 'email',filter:true},
     {headerName: 'EmailId2', field: 'alternateEmail',filter:true},
     {headerName: 'Locality', field: 'locality',filter:true},
     {headerName: 'City', field: 'city',filter:true},
     {headerName: 'State', field: 'state',filter:true},
     {headerName: 'PinCode', field: 'pincode',filter:true},
     {headerName: 'Interested Areas', field: 'interestedAreas'}

   ];
   private myGrid: any;
   private gridApi: any;
  interestedList:any[]=new Array();

   constructor(private apiService:ApiService,
               private router:Router) { }

   ngOnInit() {

    this.apiService.getData('volunteer').subscribe(response=>{

          let result:any=JSON.parse(JSON.stringify(response));


          Array.from(result).forEach(element => {
            let interestedAreas1=JSON.parse(JSON.stringify(element)).interestedAreas;
            while(this.interestedList.length)
            {
              this.interestedList.pop();
            }

            for(var val of interestedAreas1)
                {
                console.log("hey:"+val["interestedArea"]);
                this.interestedList.push(val["interestedArea"]);

                }
            Object.assign(element, {interestedAreas: this.interestedList.toString()
            });


          });
          console.log(response);
          console.log(this.data);
          this.data=result;
        });


    }



   onRowCilcked(event){
     console.log(event.rowIndex);
     this.router.navigateByUrl("/volunteer/edit/"+((event.rowIndex)+1));
     }




}
