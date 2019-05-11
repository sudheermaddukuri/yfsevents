import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  pushFileData(file: File){
    let formData: FormData = new FormData();
    formData.append('file', file);
    let request = new HttpRequest('POST', 'api/bulk/upload', formData);
    console.log(request);
    return this.http.request(request);
  }
}
 