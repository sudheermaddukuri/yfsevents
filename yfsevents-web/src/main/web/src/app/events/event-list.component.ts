import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Eventdata } from './add-event.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector:'event-list',
  templateUrl: './event-list.component.html'
})


export class EventListComponent implements OnInit{
  pipe:any;
  rowData :any;

	columnDefs = [
        {headerName: 'EventId', field: 'id',filter:true },
        {headerName: 'Action', field: 'eventAction',filter:true},
        {headerName: 'Event Name', field: 'eventName',filter:true},
        {headerName: 'Event Category', field: 'eventCategory',filter:true},
        {headerName: 'Partner NGO', field: 'ngoName',filter:true},
        {headerName: 'Event Start Date', field: 'event_start_date',filter:true},
        {headerName: 'Event End Date', field: 'event_end_date',filter:true},
        
    ];

    eventData :any[];
    constructor(private apiService: ApiService,private router:Router){}

	ngOnInit():void{
   this.pipe = new DatePipe('en-US');
   this.apiService.getData('events').subscribe((data:any)=>{
        this.eventData=data;
        console.log(data);
        this.rowData = this.eventData.map(event=>({
          id:event.id,
          eventAction:event.eventAction,
          eventName:event.eventName,
          eventCategory:event.eventCategory,
          ngoName:event.ngoName,
          event_start_date:this.pipe.transform(event.eventDuration[0],'shortDate'),
          event_end_date:this.pipe.transform(event.eventDuration[1],'shortDate')
        }));
      },( err:HttpErrorResponse)=>{
        console.log(err.message);
     });
    }
    
  onSearch(event:any){
    this.router.navigate(['addevent',{id:event.data.id}]);
  }
}



