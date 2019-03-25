import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-college-registration-grid',
  templateUrl: './college-registration-grid.component.html',
  styleUrls: ['./college-registration-grid.component.css']
})
export class CollegeRegistrationGridComponent implements OnInit {

  private data:any=[];
  private headers=[
    {headerName: 'College Name', field: 'name',filter:true, sortable: true },
    {headerName: 'Registration Id', field: 'description',filter:true},
    {headerName: 'Mou Name', field: 'mouName'},
    {headerName: 'Mou ID', field: 'mouID',filter:true},
    {headerName: 'Mou Status', field: 'mouStatus'}
    
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
    this.apiService.getData('collegeregistration').subscribe(response=>{
      let result:any=JSON.parse(JSON.stringify(response));
      Array.from(result).forEach(element => {
        let mouDetails=JSON.parse(JSON.stringify(element)).mouDetails;
        Object.assign(element, {mouName: mouDetails[0].mouName});
        Object.assign(element, {mouStatus: mouDetails[0].mouStatus});
        Object.assign(element, {mouID: mouDetails[0].mouID});
      });
      console.log(response);
      console.log(this.data);
      this.data=result;
    });
  }

  onRowCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/collegeregistration/edit/"+((event.rowIndex)+1));
  }


}
