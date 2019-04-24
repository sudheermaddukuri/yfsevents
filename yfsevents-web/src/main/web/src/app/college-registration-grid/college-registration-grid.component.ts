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

    // {headerName: 'Mou ID (2)', field: 'mouID1',filter:true},
    // {headerName: 'Mou Status (2)', field: 'mouStatus1'},
    // {headerName: 'Mou Name (2)', field: 'mouName1'},
    // {headerName: 'Number Of Events Agreed (2)', field: 'noOfEvents1'},
    // {headerName: 'Valid From (2)', field: 'fromDate1'},
    // {headerName: 'Valid To (2)', field: 'toDate1'},
    // {headerName: 'Comments (2)', field: 'comments1'},

    // {headerName: 'Mou ID (3)', field: 'mouID2',filter:true},
    // {headerName: 'Mou Status (3)', field: 'mouStatus2'},
    // {headerName: 'Mou Name (3)', field: 'mouName2'},
    // {headerName: 'Number Of Events Agreed (3)', field: 'noOfEvents2'},
    // {headerName: 'Valid From (3)', field: 'fromDate2'},
    // {headerName: 'Valid To (3)', field: 'toDate2'},
    // {headerName: 'Comments (3)', field: 'comments2'},
 
    // {headerName: 'Mou ID (4)', field: 'mouID3',filter:true},
    // {headerName: 'Mou Status (4)', field: 'mouStatus3'},
    // {headerName: 'Mou Name (4)', field: 'mouName3'},
    // {headerName: 'Number Of Events Agreed (4)', field: 'noOfEvents3'},
    // {headerName: 'Valid From (4)', field: 'fromDate3'},
    // {headerName: 'Valid To (4)', field: 'toDate3'},
    // {headerName: 'Comments (4)', field: 'comments3'},

    // {headerName: 'Mou ID (5)', field: 'mouID4',filter:true},
    // {headerName: 'Mou Status (5)', field: 'mouStatus4'},
    // {headerName: 'Mou Name (5)', field: 'mouName4'},
    // {headerName: 'Number Of Events Agreed (5)', field: 'noOfEvents4'},
    // {headerName: 'Valid From (5)', field: 'fromDate4'},
    // {headerName: 'Valid To (5)', field: 'toDate4'},
    // {headerName: 'Comments (5)', field: 'comments4'},

    // {headerName: 'Mou ID (6)', field: 'mouID5',filter:true},
    // {headerName: 'Mou Status (6)', field: 'mouStatus5'},
    // {headerName: 'Mou Name (6)', field: 'mouName5'},
    // {headerName: 'Number Of Events Agreed (6)', field: 'noOfEvents5'},
    // {headerName: 'Valid From (6)', field: 'fromDate5'},
    // {headerName: 'Valid To (6)', field: 'toDate5'},
    // {headerName: 'Comments (6)', field: 'comments5'}, 

    // {headerName: 'Mou ID (7)', field: 'mouID6',filter:true},
    // {headerName: 'Mou Status (7)', field: 'mouStatus6'},
    // {headerName: 'Mou Name (7)', field: 'mouName6'},
    // {headerName: 'Number Of Events Agreed (7)', field: 'noOfEvents6'},
    // {headerName: 'Valid From (7)', field: 'fromDate6'},
    // {headerName: 'Valid To (7)', field: 'toDate6'},
    // {headerName: 'Comments (7)', field: 'comments6'}, 

    // {headerName: 'Mou ID (8)', field: 'mouID7',filter:true},
    // {headerName: 'Mou Status (8)', field: 'mouStatus7'},
    // {headerName: 'Mou Name (8)', field: 'mouName7'},
    // {headerName: 'Number Of Events Agreed (8)', field: 'noOfEvents7'},
    // {headerName: 'Valid From (8)', field: 'fromDate7'},
    // {headerName: 'Valid To (8)', field: 'toDate7'},
    // {headerName: 'Comments (8)', field: 'comments7'}, 

    // {headerName: 'Mou ID (9)', field: 'mouID8',filter:true},
    // {headerName: 'Mou Status (9)', field: 'mouStatus8'},
    // {headerName: 'Mou Name (9)', field: 'mouName8'},
    // {headerName: 'Number Of Events Agreed (9)', field: 'noOfEvents8'},
    // {headerName: 'Valid From (9)', field: 'fromDate8'},
    // {headerName: 'Valid To (9)', field: 'toDate8'},
    // {headerName: 'Comments (9)', field: 'comments8'}, 

    // {headerName: 'Mou ID (10)', field: 'mouID9',filter:true},
    // {headerName: 'Mou Status (10)', field: 'mouStatus9'},
    // {headerName: 'Mou Name (10)', field: 'mouName9'},
    // {headerName: 'Number Of Events Agreed (10)', field: 'noOfEvents9'},
    // {headerName: 'Valid From (10)', field: 'fromDate9'},
    // {headerName: 'Valid To (10)', field: 'toDate9'},
    // {headerName: 'Comments (10)', field: 'comments9'}, 

    
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
        let collegeDetails = JSON.parse(JSON.stringify(element));
        let mouDetails=collegeDetails.mouDetails;
        console.log(mouDetails);

        mouDetails.array.forEach(mou => {
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
            this.data.append(collegeMou);
          }
        });
      });
      console.log(response);
      console.log(this.data);
      console.log(this.data);

    });
  }

  onRowCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/collegeregistration/edit/"+((event.rowIndex)+1));
  }


}
