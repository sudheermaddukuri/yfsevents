import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-ngo-grid',
  templateUrl: './partner-ngo-grid.component.html',
  styleUrls: ['./partner-ngo-grid.component.css']
})
export class PartnerNgoGridComponent implements OnInit {

  private data:any=[];
  private headers=[
    {headerName: 'Name', field: 'name',filter:true, sortable: true },
    {headerName: 'Description', field: 'description',filter:true},
    {headerName: 'City', field: 'city',filter:true},
    {headerName: 'State', field: 'state',filter:true}
    //{headerName: 'authorized Person', field: 'authorizedPersonName'}
  ];
  private myGrid: any;
  private gridApi: any;

  constructor(private apiService:ApiService,
              private router:Router) { }

  ngOnInit() {
    /*this.data=[
      {name:'n1', description: 'd1', city: 'c1', state: 's1', authorizedPerson: [
        {name: 'a1'},{name:'a2'}
      ]},
      {name:'n2', description: 'd2', city: 'c2', state: 's2', authorizedPerson: [
        {name: 'b1'},{name:'b2'},{name:'b3'},{name:'b4'},{name:'b5'}
      ]}
    ];*/
    this.apiService.getData('partnerngo').subscribe(response=>{
      this.data=response;
      console.log(this.data);
    });
  }

  /*onGridReady(params){
    this.gridApi=params.api;
    console.log(this.gridApi);
  }*/

  onRowCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/partnerngo/view/"+((event.rowIndex)+1));
    //console.log(this.(event.data));
  }

  onRowDoubleCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/partnerngo/edit/"+event.rowIndex);
    //console.log(this.(event.data));
  }

  //onCellDoubleClicked(event){}

}
