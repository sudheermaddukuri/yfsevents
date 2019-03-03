import { Component, OnInit } from '@angular/core';

@Component({
  selector:'event-list',
  templateUrl: './event-list.component.html'
})


export class EventListComponent implements OnInit{

	columnDefs = [
        {headerName: 'EventId', field: 'event_id',filter:true },
        {headerName: 'Action', field: 'action',filter:true},
        {headerName: 'Event Name', field: 'event_name',filter:true},
        {headerName: 'Event Category', field: 'event_category',filter:true},
        {headerName: 'Partner NGO', field: 'ngo_name',filter:true},
        {headerName: 'Event Start Date', field: 'event_start_date',filter:true},
        {headerName: 'Event End Date', field: 'event_end_date',filter:true},
        
    ];

    rowData = [
        { event_id: '1001', action: 'Not Started', event_name: 'ABC', event_category :'Partner NGO',ngo_name:'XYZ',event_start_date:'15/2/2019',event_end_date:'17/2/2019' },
    
    ];
	

	ngOnInit():void{

	}
}