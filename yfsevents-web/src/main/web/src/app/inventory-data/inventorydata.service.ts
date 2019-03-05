import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InventorydataService {

  constructor(private http:HttpClient) { }

  saveInventoryData(data:any){
    this.http.post(`${environment.serverHost}/inventorydata/list`,data).subscribe(response=>{
      console.log('response: ',response);
    });
  }

  getInventoryData(){
    this.http.get(`${environment.serverHost}/inventorydata/list`);
  }

  getEventCategoryList(){
    return this.http.get(`${environment.serverHost}/inventorydata/eventcategory`);
  }
  
 
   

}
