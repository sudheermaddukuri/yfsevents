import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
    selector:'add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.css']
  })

  export class AddEventComponent implements OnInit{
    ngos: string[];
    eventForm :FormGroup;
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();
    eventData = new Eventdata();
    itemList = [];
    selectedItems = [];
    settings={};
    eventActions: string[] = ['Not Started','In progress','Completed','Abandoned'];
    eventCategories: string[] = ['PartnerNGO','Education','Environment','Health','Other'];
    recurringEventOptions: string[] = ['Yes','No'];
    constructor(private formBuilder: FormBuilder,private apiService: ApiService) {
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
      this.apiService.getData('partnerngo').subscribe((data:any)=>{
            this.ngos=data;
      });
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
    this.eventData.eventName= this.eventForm.value.eventName;
    this.eventData.eventAction=this.eventForm.value.eventAction;
    this.eventData.eventfromTime= formatDate(this.eventForm.value.fromTime,'shortTime','en-US');
    this.eventData.eventtoTime = formatDate(this.eventForm.value.toTime,'shortTime','en-US');
    this.eventData.ngoName = this.eventForm.value.ngoName;
    this.eventData.volunteers = this.eventForm.value.volunteers;
    this.eventData.recurringEvent=this.eventForm.value.recurringEvent;
    // this.eventData.eventDuration=[];
    // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[0],'fullDate','en-US'));
    // this.eventData.eventDuration.push(formatDate(this.eventForm.value.eventDuration[1],'fullDate','en-US'));
    this.eventData.eventCategory=this.eventForm.value.eventCategory;
    this.eventData.eventDuration=this.eventForm.value.eventDuration.map(date=>formatDate(date,'fullDate','en-US'));
    this.eventData.eventItems=this.eventForm.value.items.map(item => item.itemName);
    console.log(this.eventData);
    this.apiService.postData(this.eventData,'event')
  }

  

}


export class Eventdata {
  eventName:string;
  eventAction:string;
  eventfromTime:string;
  eventtoTime:string;
  ngoName:string;
  eventCategory: string;
  recurringEvent:string;
  volunteers:string;
  eventDuration:string[];
  eventItems:string[];

}