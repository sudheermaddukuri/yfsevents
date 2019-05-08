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
    {headerName: 'Registration Id', field: 'registrationId',filter:true},
    {headerName: 'Address Line 1', field: 'addressLine1',filter:true},
    {headerName: 'Address Line 2', field: 'addressLine2',filter:true},
    {headerName: 'City', field: 'city',filter:true},
    {headerName: 'State', field: 'state',filter:true},
    {headerName: 'Pincode', field: 'pincode',filter:true},
 
    {headerName: 'Mou ID', field: 'mouID',filter:true},
    {headerName: 'Mou Status', field: 'mouStatus'},
    {headerName: 'Mou Name', field: 'mouName'},
    {headerName: 'Number Of Events Agreed', field: 'noOfEvents'},
    {headerName: 'Valid From', field: 'fromDate'},
    {headerName: 'Valid To', field: 'toDate'},
    {headerName: 'Comments', field: 'comments'}
  ];
  private myGrid: any;
  private gridApi: any;

  constructor(private apiService:ApiService,
              private router:Router) { }

  ngOnInit() {
    let rows=[];
    this.apiService.getData('collegeregistration').subscribe(response=>{
      let result:any=JSON.parse(JSON.stringify(response));
      Array.from(result).forEach(element => {
        let collegeDetails = JSON.parse(JSON.stringify(element));
        let mouDetails=collegeDetails.mouDetails;
        console.log(mouDetails);

        Array.from(mouDetails).forEach(detail => {
          let mou = JSON.parse(JSON.stringify(detail));
          if(mou!=null){
            let collegeMou = {};
            Object.assign(collegeMou, collegeDetails)
            Object.assign(collegeMou, {mouID: mou.mouID});
            Object.assign(collegeMou, {mouStatus: mou.mouStatus});
            Object.assign(collegeMou, {mouName: mou.mouName});
            Object.assign(collegeMou, {noOfEvents: mou.noOfEvents});
            Object.assign(collegeMou, {fromDate: mou.fromDate});
            Object.assign(collegeMou, {toDate: mou.toDate});
            Object.assign(collegeMou, {comments: mou.comments});
            rows.push(collegeMou);
          }
        });
      });
      console.log(response);
      this.data=rows;
      console.log(this.data);

    });
  }

  onRowCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/collegeregistration/edit/"+((event.rowIndex)+1));
  }


}
