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
    {headerName: 'Branch', field: 'branch',filter:true},
    {headerName: 'Registration Number', field: 'registrationNumber',filter:true},
    {headerName: 'Address Line 1', field: 'addressLine1',filter:true},
    {headerName: 'Address Line 2', field: 'addressLine2',filter:true},
    {headerName: 'City', field: 'city',filter:true},
    {headerName: 'State', field: 'state',filter:true},
    {headerName: 'Pincode', field: 'pincode',filter:true},

    {headerName: 'Authorized Person Name', field: 'authorizedPersonName'},
    {headerName: 'Authorized Person Contact', field: 'authorizedPersonContact'},
    {headerName: 'Alternate Contact Details', field: 'contact2'},
    {headerName: 'Email ID', field: 'email1'},
    {headerName: 'Alternate Email ID', field: 'email2'},

    {headerName: 'Authorized Person Name (2)', field: 'authorizedPersonName1'},
    {headerName: 'Authorized Person Contact (2)', field: 'authorizedPersonContact1'},
    {headerName: 'Alternate Contact Details (2)', field: 'contact21'},
    {headerName: 'Email ID (2)', field: 'email11'},
    {headerName: 'Alternate Email ID (2)', field: 'email21'},
    
    {headerName: 'Authorized Person Name (3)', field: 'authorizedPersonName2'},
    {headerName: 'Authorized Person Contact (3)', field: 'authorizedPersonContact2'},
    {headerName: 'Alternate Contact Details (3)', field: 'contact22'},
    {headerName: 'Email ID (3)', field: 'email12'},
    {headerName: 'Alternate Email ID (3)', field: 'email22'},

    {headerName: 'Authorized Person Name (4)', field: 'authorizedPersonName3'},
    {headerName: 'Authorized Person Contact (4)', field: 'authorizedPersonContact3'},
    {headerName: 'Alternate Contact Details (4)', field: 'contact23'},
    {headerName: 'Email ID (4)', field: 'email13'},
    {headerName: 'Alternate Email ID (4)', field: 'email23'},

    {headerName: 'Authorized Person Name (5)', field: 'authorizedPersonName4'},
    {headerName: 'Authorized Person Contact (5)', field: 'authorizedPersonContact4'},
    {headerName: 'Alternate Contact Details (5)', field: 'contact24'},
    {headerName: 'Email ID (5)', field: 'email14'},
    {headerName: 'Alternate Email ID (5)', field: 'email24'},


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
        if(authorizedPersons[0]!=null){
        Object.assign(element, {authorizedPersonName: authorizedPersons[0].name});
        Object.assign(element, {authorizedPersonContact: authorizedPersons[0].contact1});
        Object.assign(element, {contact2: authorizedPersons[0].contact2});
        Object.assign(element, {email1: authorizedPersons[0].email1});
        Object.assign(element, {email2: authorizedPersons[0].email2});
        }
        
        if(authorizedPersons[1]!=null){
          Object.assign(element, {authorizedPersonName1: authorizedPersons[1].name});
          Object.assign(element, {authorizedPersonContact1: authorizedPersons[1].contact1});
          Object.assign(element, {contact21: authorizedPersons[1].contact2});
          Object.assign(element, {email11: authorizedPersons[1].email1});
          Object.assign(element, {email21: authorizedPersons[1].email2});
        }

        if(authorizedPersons[2]!=null){
          Object.assign(element, {authorizedPersonName2: authorizedPersons[2].name});
          Object.assign(element, {authorizedPersonContact2: authorizedPersons[2].contact1});
          Object.assign(element, {contact22: authorizedPersons[2].contact2});
          Object.assign(element, {email12: authorizedPersons[2].email1});
          Object.assign(element, {email22: authorizedPersons[2].email2});
        }

        if(authorizedPersons[3]!=null){
        Object.assign(element, {authorizedPersonName3: authorizedPersons[3].name});
        Object.assign(element, {authorizedPersonContact3: authorizedPersons[3].contact1});
        Object.assign(element, {contact23: authorizedPersons[3].contact2});
        Object.assign(element, {email13: authorizedPersons[3].email1});
        Object.assign(element, {email23: authorizedPersons[3].email2});
        }

        if(authorizedPersons[4]!=null){
        Object.assign(element, {authorizedPersonName4: authorizedPersons[4].name});
        Object.assign(element, {authorizedPersonContact4: authorizedPersons[4].contact1});
        Object.assign(element, {contact24: authorizedPersons[4].contact2});
        Object.assign(element, {email14: authorizedPersons[4].email1});
        Object.assign(element, {email24: authorizedPersons[4].email2});
        }

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
