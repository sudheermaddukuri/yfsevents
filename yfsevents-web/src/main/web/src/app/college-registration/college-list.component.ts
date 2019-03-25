import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {
  columnDefs = [
    {headerName: 'College Name', field: 'collegename',filter:true },
    {headerName: 'MOU Name', field: 'mouname',filter:true},
    {headerName: 'MOU ID', field: 'mouID',filter:true},
    {headerName: 'No Of Events', field: 'noOfEvents',filter:true},
    {headerName: 'Start Date', field: 'startDate',filter:true},
    {headerName: 'End Date', field: 'endDate',filter:true},
    {headerName: 'Comments', field: 'comments',filter:true},
    
];

rowData = [
    { collegename: 'JNTU', mouname: 'a', mouID: '1', noOfEvents :'10',startDate:'2019-03-10',endDate:'2019-04-09',comments:'' },

];

  constructor() { }

  ngOnInit() {
  }

}
