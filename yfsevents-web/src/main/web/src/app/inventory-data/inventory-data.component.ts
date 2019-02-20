import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory-data',
  templateUrl: './inventory-data.component.html',
  styleUrls: ['./inventory-data.component.css']
})
export class InventoryDataComponent implements OnInit {
  inventoryData: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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

  }

}
