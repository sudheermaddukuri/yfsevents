import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient,
              private apiService : ApiService
              ) { }

  pushFileData(file: File){
    let formData: FormData = new FormData();
    formData.append('file', file);
    let request = new HttpRequest('POST', 'api/bulk/upload', formData);
    console.log(request);
    return this.http.request(request);
  }

  saveBulkData(data){
    let formData: FormData = new FormData();
    formData.append('bulkVolunteer', data);
    let request = new HttpRequest('POST', '/api/bulk/save', formData);
    return this.http.request(request);
    // return this.http.post("/api/bulk/save",data).subscribe(result=>{
    //   console.log("Save ReSUlt: "+result);
    //   let result1 = JSON.parse(JSON.stringify(result));
    //   let response = {};
    //   Object.assign(response, { status:result1.status, body:result1.body}) ;
    //   return response;
    // });
  }
}
 