import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import {ngDevModeResetPerfCounters}from '@angular/core/src/render3/ng_dev_mode';
import { JsonPipe}from '@angular/common';

@Component({
  selector: 'app-partner-ngo-grid',
  templateUrl: './partner-ngo-grid.component.html',
  styleUrls: ['./partner-ngo-grid.component.css']
})
export class PartnerNgoGridComponent implements OnInit {

  private data:any=[];
  private headers=[
{headerName: 'Partner NGO', field: 'name',filter:true, sortable: true},
    {headerName: 'Description', field: 'description',filter:true},
    {headerName: 'City', field: 'city',filter:true},
{headerName: 'Authorized Person Name', field: 'authorizedPersonName'},
{headerName: 'Authorized Person Contact', field: 'authorizedPersonContact'
}
  ];
// {headerName: 'State', field: 'state',filter:true},
  private myGrid: any;
  private gridApi: any;

  constructor(private apiService:ApiService,
              private router:Router) { }

  ngOnInit() {
    // this.data=[
    //   {name:'n1', description: 'd1', city: 'c1', state: 's1', authorizedPerson: [
    //     {name: 'a1'},{name:'a2'}
    //   ]},
    //   {name:'n2', description: 'd2', city: 'c2', state: 's2', authorizedPerson: [
    //     {name: 'b1'},{name:'b2'},{name:'b3'},{name:'b4'},{name:'b5'}
    //   ]}
    // ];
    this.apiService.getData('partnerngo').subscribe(response=>{
      let result:any=JSON.parse(JSON.stringify(response));
      Array.from(result).forEach(element => {
        let authorizedPersons=JSON.parse(JSON.stringify(element)).authorizedPerson;
        Object.assign(element, {authorizedPersonName: authorizedPersons[0].name});
        Object.assign(element, {authorizedPersonContact: authorizedPersons[0].contact1});
      });
      console.log(response);
      console.log(this.data);
      this.data=result;
    });
  }

  onRowCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/partnerngo/edit/"+((event.rowIndex)+1));
  }

  // onRowDoubleCilcked(event){}

  //onCellDoubleClicked(event){}

}
