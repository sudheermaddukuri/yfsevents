import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.urlList.set('volunteer-create','/volunteer-create');
    this.urlList.set('collegeregistration','/collegeregistration');
  }
  postData(data:any, type:string){
    console.log('posting', data);
    this.http.post(this.basicURL+this.urlList.get(type),data).subscribe(response=>{
      console.log('postResponse: ',response);
    });
  }

  getData(type:string, id?:any, formatted?:boolean){
    let uri : string =this.basicURL+this.urlList.get(type);
    if(id){
      uri = uri + '/' + id;
      if(formatted){
        uri = uri + '/' + 'formatted';
      }
    }
    return this.http.get(uri);
  }

}
