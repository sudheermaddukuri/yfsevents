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
  }
  postData(data, type:string){
    console.log('posting', data);
    this.http.post(this.basicURL+this.urlList.get(type),data).subscribe(response=>{
      console.log('postResponse: ',response);
    });
  }

  getData(type){
    this.http.get(this.basicURL+this.urlList.get(type)).subscribe(response=>{
      console.log('getResponse: ',response);
    });
  }
}
