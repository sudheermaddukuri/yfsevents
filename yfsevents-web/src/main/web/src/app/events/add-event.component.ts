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
    itemList = [];
    selectedItems = [];
    settings={};
    eventActions: string[] = ['Not Started','In progress','Completed','Abandoned'];
    eventCategories: string[] = ['PartnerNGO','Education','Environment','Health','Other'];
    recurringEventOptions: string[] = ['Yes','No'];
    constructor(private formBuilder: FormBuilder) {
      this.eventForm=this.formBuilder.group({
        eventName: '',
        eventAction: 'Not Started',
        eventDuration:null,
        fromTime: new Date(),
        toTime: new Date(),
        ngoName:'',
        eventCategory:'',
        recurringEvent:'No',
        items:[],
        volunteers: ''
      });
    }
   
  
    ngOnInit(){ 
      this.itemList = [
        { "id": 1, "itemName": "Item1" },
        { "id": 2, "itemName": "Item2" },
        { "id": 3, "itemName": "Item3" },
        { "id": 4, "itemName": "Item4" },
        { "id": 5, "itemName": "Item5" },
        { "id": 6, "itemName": "Item6" }
    ];
    this.selectedItems = [];
    this.settings = {
      singleSelection: false,
        text: "Select Items",
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        enableSearchFilter: true
    };

  }
  
  log($event){
    console.log("hi");
  }

  onSubmit():void{
    console.log(this.eventForm.value);
  }

}