import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:'add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.css']
  })

  export class AddEventComponent implements OnInit{
    eventForm :FormGroup;
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    eventActions: string[];
    constructor(private formBuilder: FormBuilder) {
      // this.maxDate.setDate(this.maxDate.getDate() + 7);
      // this.bsRangeValue = [this.bsValue, this.maxDate];
      this.eventActions=["Not Started","In progress","Completed","Abandoned"];
    }
   
  
    ngOnInit(){
      this.eventForm=this.formBuilder.group({
        eventName: '',
        eventAction: '',
        eventDuration:''

      });
	}

}