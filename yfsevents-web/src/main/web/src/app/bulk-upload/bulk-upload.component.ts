import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentUploadedFile: File;
  fileUrl;

  private data:any=[];
  private headers=[
    {headerName: 'First Name', field: 'firstName',filter:true, sortable: true },
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
    {headerName: 'Interested Areas', field: 'interestedAreas'},
    {headerName: 'Comments', field: 'status'}
  ];
  private bulkGrid:any;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.fileUrl = "/assets/sample.xls"
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
    console.log('file uploaded: ');
    console.log(event.target.files);
  }

  downloadTemplate(){
    
  }

  upload(){
    this.currentUploadedFile = this.selectedFiles.item(0);
    this.uploadService.pushFileData(this.currentUploadedFile).subscribe(result=>{
      console.log("Upload Response" + result);
      let response = JSON.parse(JSON.stringify(result));
      if(response.status && response.status===200){
        let volunteers =[];
        (response.body).forEach(element => {
          let volunteer={};
          Object.assign(volunteer, element.errors);
          Object.assign(volunteer, element.volunteer);
          let interestedAreas = [];
          (element.volunteer.interestedAreas).forEach(interestedArea => {
            interestedAreas.push(interestedArea["interestedArea"]);
          });
          Object.assign(volunteer, interestedAreas);
          volunteers.push(volunteer);
        });
        this.data = volunteers;
      }
      console.log("Upload Parsed Response" + result);
    });
  }

  save(){
    alert("Only data with no errors will be saved");
  } 

}
