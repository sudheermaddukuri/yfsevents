
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ngDevModeResetPerfCounters}from '@angular/core/src/render3/ng_dev_mode';
import { JsonPipe}from '@angular/common';
import { GridApi, Column } from 'ag-grid-community';
import {GridOptions} from 'ag-grid-community';
import { CollapseModule } from 'ngx-bootstrap';



@Component({
  selector: 'app-volunteer-grid',
  templateUrl: './volunteer-grid.component.html',
  styleUrls: ['./volunteer-grid.component.css']
})


export class VolunteerGridComponent implements OnInit {
 
 private data:any=[];
 private eventId:any;
 public  selectedEmails:any="";
   private headers=[
     {headerName: 'First Name', field: 'firstName',filter:true, sortable: true,headerCheckboxSelection: true,
     headerCheckboxSelectionFilteredOnly: true,
     checkboxSelection: true },

     {headerName: 'Last Name', field: 'lastName',filter:true},
     {headerName: 'Phone Prefix', field: 'phonePrefix',filter:true},
     {headerName: 'Phone Number', field: 'phoneNumber',filter:true},
     {headerName: 'Phone Prefix', field: 'alternatePhonePrefix',filter:true},
     {headerName: 'Alternate Phone Number', field: 'alternatePhoneNumber',filter:true},
     {headerName: 'EmailId', field: 'email',filter:true},
     {headerName: 'EmailId2', field: 'alternateEmail',filter:true},
     {headerName: 'Locality', field: 'locality',filter:true},
     {headerName: 'City', field: 'city',filter:true},
     {headerName: 'State', field: 'state',filter:true},
     {headerName: 'PinCode', field: 'pincode',filter:true},
     {headerName: 'Interested Areas', field: 'interestedAreas',filter:true},
     {headerName: 'PreferredTimings', field: 'volunteerPreferredTimings',filter:true}
   ];
   private myGrid: any;
   private gridApi: any;
   private gridOptions: any;
   private gridColumnApi: any;
   private rowSelection :any;
   private columnDefs: Object[];
   private emailsSelected: any;
   private redirectToEmail:boolean;
  interestedList:any[]=new Array();
   constructor(private apiService:ApiService,
               private router:Router,private route: ActivatedRoute,) { }
               ngOnInit() {    
                 this.emailsSelected="";  
    this.eventId=this.route.snapshot.paramMap.get('id')
    console.log("route id is"+this.eventId);
    if(!(this.eventId==null || this.eventId==""))
    this.redirectToEmail=true;
    else
    this.redirectToEmail=false;
    console.log("reirect vvalue is"+this.redirectToEmail);
    this.rowSelection = "multiple";
    this.apiService.getData('volunteer').subscribe(response=>{
          let result:any=JSON.parse(JSON.stringify(response));
          Array.from(result).forEach(element => {
            let interestedAreas1=JSON.parse(JSON.stringify(element)).interestedAreas;
            while(this.interestedList.length)
            {
              this.interestedList.pop();
            }
            for(var val of interestedAreas1)
                {
                console.log("hey:"+val["interestedArea"]);
                this.interestedList.push(val["interestedArea"]);
                }
            Object.assign(element, {interestedAreas: this.interestedList.toString()
            });
          });
          console.log(response);
          console.log(this.data);
          this.data=result;
          
          
        });
    }
   onGridReady(params) {
      
      //this.gridOptions=params.GridOptions;
      console.log("You are here");
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.gridColumnApi.columnDefs=params.columnDefs;
      this.gridOptions = <GridOptions>{
        context: {parentComponent: this},
      };
      //new agGrid.Grid( this.gridOptions)
    }

   onRowCilcked(event){
     console.log(event.rowIndex);
    this.router.navigateByUrl("/volunteer/edit/"+((event.rowIndex)+1));


    // console.log(this.printAllDisplayedRows());
    //    console.log("### api.forEachNodeAfterFilterAndSort() ###");
    //    //this.gridApi.forEachNodeAfterFilterAndSort(this.printNode);
    //  //  this.gridApi.getSelectedNodes().forEach(node=>{console.log(node.data.email)});
    //   this.onBtForEachNodeAfterFilterAndSort();
     }

     onBtForEachNodeAfterFilterAndSort() {
      console.log("### api.forEachNodeAfterFilterAndSort() ###");
      //this.gridApi.forEachNodeAfterFilterAndSort(this.printNode);

      this.gridApi.getSelectedNodes().forEach(node=>{this.appendEmails(node.data.email)});
      this.router.navigate(['email',{id:this.eventId,emails:this.emailsSelected}]);
    }
    
     printNode(node, index) {
      if (node.group) {
        console.log(index + " -> group: " + node.key);
      } else {
        console.log(index + " -> data: " + node.data.city + ", " + node.data.email);
      }
    }
    
    appendEmails(email)
    {
    if(this.emailsSelected=="")
    this.emailsSelected=email;
    else
    this.emailsSelected=this.emailsSelected+","+email;
    }
    
    redirectToEmailFun()
    {
      console.log("red to email is"+this.redirectToEmail);
      return this.redirectToEmail;
    }
}
