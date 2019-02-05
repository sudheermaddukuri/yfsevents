import { Component, OnInit } from '@angular/core';

@Component({
  selector:'event-list',
  templateUrl: './event-list.component.html'
})


export class EventListComponent implements OnInit{

	columnDefs = [
        {headerName: 'EventId', field: 'event_id' },
        {headerName: 'Action', field: 'action' },
        {headerName: 'Event Name', field: 'event_name'},
        {headerName: 'Event Category', field: 'event_category'},
        {headerName: 'Partner NGO', field: 'ngo_name'},
        {headerName: 'Event Start Date', field: 'event_start_date'},
        {headerName: 'Event End Date', field: 'event_end_date'},
        
    ];

    rowData = [
        { event_id: '1001', action: 'Not Started', event_name: 'ABC', event_category :'Partner NGO',ngo_name:'XYZ',event_start_date:'15/2/2019',event_end_date:'17/2/2019' },
    
    ];
	

	ngOnInit():void{

	}
}