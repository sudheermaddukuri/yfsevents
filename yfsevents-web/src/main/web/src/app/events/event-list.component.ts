import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector:'event-list',
  templateUrl: './event-list.component.html'
})


export class EventListComponent implements OnInit{

  rowData = new TableData();

	columnDefs = [
        {headerName: 'EventId', field: 'id',filter:true },
        {headerName: 'Action', field: 'eventAction',filter:true},
        {headerName: 'Event Name', field: 'eventName',filter:true},
        {headerName: 'Event Category', field: 'eventCategory',filter:true},
        {headerName: 'Partner NGO', field: 'ngoName',filter:true},
        {headerName: 'Event Start Date', field: 'event_start_date',filter:true},
        {headerName: 'Event End Date', field: 'event_end_date',filter:true},
        
    ];

    eventData :any;
    constructor(private apiService: ApiService){}

	ngOnInit():void{
      this.eventData = this.apiService.getData('events');
      this.rowData = this.eventData;
      this.rowData.eventStartDate= this.eventData.eventDuration.get(0);
    this.rowData.eventEndDate = this.eventData.eventDuration.get(1);
  console.log(this.rowData);	}
}

export class TableData{
  id:string;
  eventAction:string;
  eventName:string;
  eventCategory:string;
  ngoName:string;
  eventStartDate:string;
  eventEndDate:string;
}