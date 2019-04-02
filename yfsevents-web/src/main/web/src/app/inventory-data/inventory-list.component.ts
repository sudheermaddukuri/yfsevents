import { Component, OnInit } from '@angular/core';
import { InventorydataService } from './inventorydata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  
  columnDefs = [
    {headerName: 'No', field: 'id',filter:true},
    {headerName: 'Item Name', field: 'itemName',filter:true },
    {headerName: 'Event Category', field: 'eventCategory',filter:true},
    {headerName: 'Comments', field: 'comments',filter:true} 
];

rowData:any[];

  constructor(private inventoryService: InventorydataService,private router:Router) { }

  ngOnInit() {
    this.inventoryService.getInventoryData().subscribe((data:any) =>{
      this.rowData= data;
    },(err:HttpErrorResponse) =>{
       console.log(err.message)
    })
  }

  onSearch(event:any){
    this.router.navigate(['inventorydata','edit',{id:event.data.id}]);
   
    

  }

  
}
