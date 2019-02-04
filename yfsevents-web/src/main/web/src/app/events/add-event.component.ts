import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:'add-event',
    templateUrl: './add-event.component.html'
  })

  export class AddEventComponent implements OnInit{

    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    constructor() {
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsRangeValue = [this.bsValue, this.maxDate];
    }
   
  
    ngOnInit():void{

	}

}