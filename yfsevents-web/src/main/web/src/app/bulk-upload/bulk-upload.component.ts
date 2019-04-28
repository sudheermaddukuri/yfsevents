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

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  selectFile(event){
    this.selectedFiles = event.target.files;
    console.log('file uploaded: ');
    console.log(event.target.files);
  }

  upload(){
    this.currentUploadedFile = this.selectedFiles.item(0);
    this.uploadService.pushFileData(this.currentUploadedFile).subscribe(result=>{
      console.log(result);
    });
  }

}
