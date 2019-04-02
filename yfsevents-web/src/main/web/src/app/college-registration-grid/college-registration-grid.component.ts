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
    {headerName: 'Comments', field: 'comments'},

    {headerName: 'Mou ID (2)', field: 'mouID1',filter:true},
    {headerName: 'Mou Status (2)', field: 'mouStatus1'},
    {headerName: 'Mou Name (2)', field: 'mouName1'},
    {headerName: 'Number Of Events Agreed (2)', field: 'noOfEvents1'},
    {headerName: 'Valid From (2)', field: 'fromDate1'},
    {headerName: 'Valid To (2)', field: 'toDate1'},
    {headerName: 'Comments (2)', field: 'comments1'},

    {headerName: 'Mou ID (3)', field: 'mouID2',filter:true},
    {headerName: 'Mou Status (3)', field: 'mouStatus2'},
    {headerName: 'Mou Name (3)', field: 'mouName2'},
    {headerName: 'Number Of Events Agreed (3)', field: 'noOfEvents2'},
    {headerName: 'Valid From (3)', field: 'fromDate2'},
    {headerName: 'Valid To (3)', field: 'toDate2'},
    {headerName: 'Comments (3)', field: 'comments2'},
 
    {headerName: 'Mou ID (4)', field: 'mouID3',filter:true},
    {headerName: 'Mou Status (4)', field: 'mouStatus3'},
    {headerName: 'Mou Name (4)', field: 'mouName3'},
    {headerName: 'Number Of Events Agreed (4)', field: 'noOfEvents3'},
    {headerName: 'Valid From (4)', field: 'fromDate3'},
    {headerName: 'Valid To (4)', field: 'toDate3'},
    {headerName: 'Comments (4)', field: 'comments3'},

    {headerName: 'Mou ID (5)', field: 'mouID4',filter:true},
    {headerName: 'Mou Status (5)', field: 'mouStatus4'},
    {headerName: 'Mou Name (5)', field: 'mouName4'},
    {headerName: 'Number Of Events Agreed (5)', field: 'noOfEvents4'},
    {headerName: 'Valid From (5)', field: 'fromDate4'},
    {headerName: 'Valid To (5)', field: 'toDate4'},
    {headerName: 'Comments (5)', field: 'comments4'},

    {headerName: 'Mou ID (6)', field: 'mouID5',filter:true},
    {headerName: 'Mou Status (6)', field: 'mouStatus5'},
    {headerName: 'Mou Name (6)', field: 'mouName5'},
    {headerName: 'Number Of Events Agreed (6)', field: 'noOfEvents5'},
    {headerName: 'Valid From (6)', field: 'fromDate5'},
    {headerName: 'Valid To (6)', field: 'toDate5'},
    {headerName: 'Comments (6)', field: 'comments5'}, 

    {headerName: 'Mou ID (7)', field: 'mouID6',filter:true},
    {headerName: 'Mou Status (7)', field: 'mouStatus6'},
    {headerName: 'Mou Name (7)', field: 'mouName6'},
    {headerName: 'Number Of Events Agreed (7)', field: 'noOfEvents6'},
    {headerName: 'Valid From (7)', field: 'fromDate6'},
    {headerName: 'Valid To (7)', field: 'toDate6'},
    {headerName: 'Comments (7)', field: 'comments6'}, 

    {headerName: 'Mou ID (8)', field: 'mouID7',filter:true},
    {headerName: 'Mou Status (8)', field: 'mouStatus7'},
    {headerName: 'Mou Name (8)', field: 'mouName7'},
    {headerName: 'Number Of Events Agreed (8)', field: 'noOfEvents7'},
    {headerName: 'Valid From (8)', field: 'fromDate7'},
    {headerName: 'Valid To (8)', field: 'toDate7'},
    {headerName: 'Comments (8)', field: 'comments7'}, 

    {headerName: 'Mou ID (9)', field: 'mouID8',filter:true},
    {headerName: 'Mou Status (9)', field: 'mouStatus8'},
    {headerName: 'Mou Name (9)', field: 'mouName8'},
    {headerName: 'Number Of Events Agreed (9)', field: 'noOfEvents8'},
    {headerName: 'Valid From (9)', field: 'fromDate8'},
    {headerName: 'Valid To (9)', field: 'toDate8'},
    {headerName: 'Comments (9)', field: 'comments8'}, 

    {headerName: 'Mou ID (10)', field: 'mouID9',filter:true},
    {headerName: 'Mou Status (10)', field: 'mouStatus9'},
    {headerName: 'Mou Name (10)', field: 'mouName9'},
    {headerName: 'Number Of Events Agreed (10)', field: 'noOfEvents9'},
    {headerName: 'Valid From (10)', field: 'fromDate9'},
    {headerName: 'Valid To (10)', field: 'toDate9'},
    {headerName: 'Comments (10)', field: 'comments9'}, 

    
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
        console.log(mouDetails);
        if(mouDetails[0]!=null){
        Object.assign(element, {mouID: mouDetails[0].mouID});
        Object.assign(element, {mouStatus: mouDetails[0].mouStatus});
        Object.assign(element, {mouName: mouDetails[0].mouName});
        Object.assign(element, {noOfEvents: mouDetails[0].noOfEvents});
        Object.assign(element, {fromDate: mouDetails[0].fromDate});
        Object.assign(element, {toDate: mouDetails[0].toDate});
        Object.assign(element, {comments: mouDetails[0].comments});
        }
        if(mouDetails[1]!=null){
        Object.assign(element, {mouID1: mouDetails[1].mouID});
        Object.assign(element, {mouStatus1: mouDetails[1].mouStatus});
        Object.assign(element, {mouName1: mouDetails[1].mouName});
        Object.assign(element, {noOfEvents1: mouDetails[1].noOfEvents});
        Object.assign(element, {fromDate1: mouDetails[1].fromDate});
        Object.assign(element, {toDate1: mouDetails[1].toDate});
        Object.assign(element, {comments1: mouDetails[1].comments});
        }
        if(mouDetails[2]!=null){
        Object.assign(element, {mouID2: mouDetails[2].mouID});
        Object.assign(element, {mouStatus2: mouDetails[2].mouStatus});
        Object.assign(element, {mouName2: mouDetails[2].mouName});
        Object.assign(element, {noOfEvents2: mouDetails[2].noOfEvents});
        Object.assign(element, {fromDate2: mouDetails[2].fromDate});
        Object.assign(element, {toDate2: mouDetails[2].toDate});
        Object.assign(element, {comments2: mouDetails[2].comments});
        }
        if(mouDetails[3]!=null){
        Object.assign(element, {mouID3: mouDetails[3].mouID});
        Object.assign(element, {mouStatus3: mouDetails[3].mouStatus});
        Object.assign(element, {mouName3: mouDetails[3].mouName});
        Object.assign(element, {noOfEvents3: mouDetails[3].noOfEvents});
        Object.assign(element, {fromDate3: mouDetails[3].fromDate});
        Object.assign(element, {toDate3: mouDetails[3].toDate});
        Object.assign(element, {comments3: mouDetails[3].comments});
        }
        if(mouDetails[4]!=null){
        Object.assign(element, {mouID4: mouDetails[4].mouID});
        Object.assign(element, {mouStatus4: mouDetails[4].mouStatus});
        Object.assign(element, {mouName4: mouDetails[4].mouName});
        Object.assign(element, {noOfEvents4: mouDetails[4].noOfEvents});
        Object.assign(element, {fromDate4: mouDetails[4].fromDate});
        Object.assign(element, {toDate4: mouDetails[4].toDate});
        Object.assign(element, {comments4: mouDetails[4].comments});
        }
        if(mouDetails[5]!=null){
        Object.assign(element, {mouID5: mouDetails[5].mouID});
        Object.assign(element, {mouStatus5: mouDetails[5].mouStatus});
        Object.assign(element, {mouName5: mouDetails[5].mouName});
        Object.assign(element, {noOfEvents5: mouDetails[5].noOfEvents});
        Object.assign(element, {fromDate5: mouDetails[5].fromDate});
        Object.assign(element, {toDate5: mouDetails[5].toDate});
        Object.assign(element, {comments5: mouDetails[5].comments}); 
        }
        if(mouDetails[6]!=null){
        Object.assign(element, {mouID6: mouDetails[6].mouID});
        Object.assign(element, {mouStatus6: mouDetails[6].mouStatus});
        Object.assign(element, {mouName6: mouDetails[6].mouName});
        Object.assign(element, {noOfEvents6: mouDetails[6].noOfEvents});
        Object.assign(element, {fromDate6: mouDetails[6].fromDate});
        Object.assign(element, {toDate6: mouDetails[6].toDate});
        Object.assign(element, {comments6: mouDetails[6].comments});
        }
        if(mouDetails[7]!=null){
        Object.assign(element, {mouID7: mouDetails[7].mouID});
        Object.assign(element, {mouStatus7: mouDetails[7].mouStatus});
        Object.assign(element, {mouName7: mouDetails[7].mouName});
        Object.assign(element, {noOfEvents7: mouDetails[7].noOfEvents});
        Object.assign(element, {fromDate7: mouDetails[7].fromDate});
        Object.assign(element, {toDate7: mouDetails[7].toDate});
        Object.assign(element, {comments7: mouDetails[7].comments});
        }
        if(mouDetails[8]!=null){
        Object.assign(element, {mouID8: mouDetails[8].mouID});
        Object.assign(element, {mouStatus8: mouDetails[8].mouStatus});
        Object.assign(element, {mouName8: mouDetails[8].mouName});
        Object.assign(element, {noOfEvents8: mouDetails[8].noOfEvents});
        Object.assign(element, {fromDate8: mouDetails[8].fromDate});
        Object.assign(element, {toDate8: mouDetails[8].toDate});
        Object.assign(element, {comments8: mouDetails[8].comments});
        }
        if(mouDetails[9]!=null){
        Object.assign(element, {mouID9: mouDetails[9].mouID});
        Object.assign(element, {mouStatus9: mouDetails[9].mouStatus});
        Object.assign(element, {mouName9: mouDetails[9].mouName});
        Object.assign(element, {noOfEvents9: mouDetails[9].noOfEvents});
        Object.assign(element, {fromDate9: mouDetails[9].fromDate});
        Object.assign(element, {toDate9: mouDetails[9].toDate});
        Object.assign(element, {comments9: mouDetails[9].comments});
        }
      
        
      });
      console.log(response);
      console.log(this.data);
      this.data=result;
      console.log(this.data);

    });
  }

  onRowCilcked(event){
    console.log(event.rowIndex);
    this.router.navigateByUrl("/collegeregistration/edit/"+((event.rowIndex)+1));
  }


}
