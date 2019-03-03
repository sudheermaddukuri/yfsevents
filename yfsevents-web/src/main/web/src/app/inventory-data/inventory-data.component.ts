import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventorydataService } from './inventorydata.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inventory-data',
  templateUrl: './inventory-data.component.html',
  styleUrls: ['./inventory-data.component.css']
})
export class InventoryDataComponent implements OnInit {
  inventoryData: FormGroup;
  eventCategory:any[];
  selected:any;
  constructor(private formBuilder: FormBuilder,private inventoryService:InventorydataService) { }

  ngOnInit() {

    this.inventoryData = this.formBuilder.group({
      itemName: ['',[
        Validators.required, Validators.maxLength(50)
      ]],
      eventCategory: [''],
      comments:['',[
        Validators.required, Validators.maxLength(200)
      ]],
      
    });

    this.inventoryService.getEventCategoryList().subscribe((data:any) =>
    {
      this.eventCategory= data;
    },( err:HttpErrorResponse)=>{
       console.log(err.message);
    })

   

  }

  onSubmit(){
    console.log(this.selected);
    const data=Object.assign({},this.inventoryData.getRawValue(),{eventCategory:this.selected});
    console.log(this.inventoryData.getRawValue());
    console.log(data);
    this.inventoryService.saveInventoryData(data);

  }

}
