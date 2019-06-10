import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GridOptions } from 'ag-grid-community';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  private data:any=[];
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
     {headerName: 'Interested Areas', field: 'interestedAreas'}
   ];
   private myGrid: any;
   private gridApi: any;
   private gridColumnApi: any;
   private rowSelection :any;
   public gridOptions: GridOptions;
  interestedList:any[]=new Array();
   constructor(private apiService:ApiService,
               private router:Router,public activeModal: NgbActiveModal) { }
   ngOnInit() {
    this.rowSelection = "multiple";
    this.apiService.getData('volunteerAccepted','1').subscribe(response=>{
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
      // this.gridOptions.columnDefs=this.headers;
      // console.log("You are here");
      // this.gridApi = params.api;
      // this.gridColumnApi = params.columnApi;
    }

   onRowCilcked(event){
     console.log(event.rowIndex);
     this.router.navigateByUrl("/volunteer/edit/"+((event.rowIndex)+1));
      // console.log(this.printAllDisplayedRows());
     //  this.onBtForEachNodeAfterFilterAndSort();
     }



 
 
  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
