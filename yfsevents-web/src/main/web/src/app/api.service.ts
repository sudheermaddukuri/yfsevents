import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private basicURL:string="/api"

  private urlList=new Map<string, string>();

  constructor(private http:HttpClient) {
    this.initialiseUrlList();
  }

  initialiseUrlList():void{
    this.urlList.set('partnerngo', '/partnerngo');
    this.urlList.set('event','/event');
    this.urlList.set('events','/events');
    this.urlList.set('volunteer-create','/volunteer-create');
    this.urlList.set('collegeregistration','/collegeregistration');
  }
  postData(data, type:string){
    console.log('posting', data);
    this.http.post(this.basicURL+this.urlList.get(type),data).subscribe(response=>{
      console.log('postResponse: ',response);
    });
  }

  getData(type){
    return this.http.get(this.basicURL+this.urlList.get(type))
  }
}
