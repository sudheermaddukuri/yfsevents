import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InventorydataService {

  constructor(private http:HttpClient) { }

  saveInventoryData(data:any){
    return this.http.post(`${environment.serverHost}/inventorydata/list`,data);
  }

  getInventoryData(){
    return this.http.get(`${environment.serverHost}/inventorydata/list`);
  }

  getEventCategoryList(){
    return this.http.get(`${environment.serverHost}/inventorydata/eventcategory`);
  }
  
  getInventoryDataById(id:any){
    return this.http.get(`${environment.serverHost}/inventorydata/list/${id}`)
  }
  
  updateInventoryDataById(data:any,id:any){
    return this.http.put(`${environment.serverHost}/inventorydata/list/${id}`,data)
  }

  getItemsByCategory(data:any){
    return this.http.get("/inventorydata/items/"+data);
  }
  
 
   

}
