import { Component, OnInit, Injectable, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service'
import { HttpErrorResponse } from '@angular/common/http';

import {InventorydataService} from '../inventory-data/inventorydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgOnChangesFeature } from '@angular/core/src/render3';
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit, AfterViewInit {

  myForm: FormGroup;
  interestedAreasCategorydata: any[];
 personalinfoupdated :any;
  isVisible: boolean = false ;
 interestedAreasCategory=[];

  selectedList: any[];
  interestedList: any[] = new Array();
  private mode: String;
  private id: number;
  dropdownSettings = {};
  preferredTimings:string[]=['Weekdays','Weekends','Both Weekdays and Weekends'];
 occupationList:string[]=['Student','Professional','Business','Homemaker','Retired','Others'];
  constructor(private formBuilder: FormBuilder, private inventoryService: InventorydataService,
    private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.myForm = this.formBuilder.group({
      personalInfo: this.personalInfo(),
      address: this.address(),
      additionalInfo: this.additionalInfo()

    });


    this.inventoryService.getEventCategoryList().subscribe((data: any) => {
          this.interestedAreasCategorydata=data;
                      this.interestedAreasCategory=this.interestedAreasCategorydata.map(interestedAreasCategory=>{
                        console.log("888",interestedAreasCategory.value);

                          return {"id":interestedAreasCategory.key,"itemName":interestedAreasCategory.value};

                      });
        }, (err: HttpErrorResponse) => {
          console.log(err.message);
        });

  //  this.interestedAreasCategory = [
   //   { "id": 1, "itemName": "Education" },
    //  { "id": 2, "itemName": "Health" },
     // { "id": 3, "itemName": "Environment" }

    //];







    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Interested Areas",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
    this.route.paramMap.subscribe(params => {
      console.log(params);
      if (params.get('mode')) {
        this.mode = params.get('mode');
        this.id = +params.get('id');
      }
      if (this.id) {
        if (!isNaN(this.id)) {

           this.apiService.getData('volunteer', this.id, true).subscribe(result => {
            let data = JSON.parse(JSON.stringify(result));
            console.log("GetResponse: " + data);
            data.additionalInfo.interestedAreas=data.additionalInfo.interestedAreas.map(interestedArea1=>({
                        id:interestedArea1.interestedAreaId,
                        itemName:interestedArea1.interestedArea
                      }));





            this.myForm.setValue(data);
            if(this.myForm.get("personalInfo").get("occupation").value=== 'Others')
                               {

                             this.isVisible= true;


                               }
                               else
                               {
                               this.isVisible= false;

                               }
          });
        } else {
          alert('Error in ID');
        }
      }
    });

  }


  ngAfterViewInit() {
    if (this.mode == 'view') {
      Array.from(document.getElementsByClassName('form-control')).forEach(element => {
        (<HTMLInputElement>element).disabled = true;
      });
    } else {
      Array.from(document.getElementsByClassName('form-control')).forEach(element => {
        (<HTMLInputElement>element).disabled = false;
      });

    }


  }
  log($event)
  {
  }

  personalInfo(): FormGroup {

    const aboutVolunteer = this.formBuilder.group({
      firstName: ['', [
        Validators.required, Validators.maxLength(50)
      ]],
      lastName: ['', [
        Validators.required, Validators.maxLength(50)
      ]],

      phoneNumber: ['', [
        Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)
      ]],
      alternatePhoneNumber: ['', [
        Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)
      ]],
      email: ['', [
        Validators.email, Validators.maxLength(50)
      ]],
        occupation : ['', []],
       others: [ '',[ Validators.maxLength(50) ]
                           ]

    });
    return aboutVolunteer;
  }

  address(): FormGroup {

    const address = this.formBuilder.group({
      locality: ['', [
        Validators.required, Validators.maxLength(2000)
      ]],
      state: ['', [
        Validators.maxLength(50)
      ]],
      city: ['', [
        Validators.required, Validators.maxLength(50)
      ]],
      pincode: ['', [
        Validators.pattern("^[0-9]+$"), Validators.minLength(6), Validators.maxLength(6)
      ]]
    });
    return address;
  }
  additionalInfo(): FormGroup {
    let me = this;
    const additionalInfo = this.formBuilder.group({
      interestedAreas: ['', [

      ]],
      volunteerPreferredTimes:['',[

      ]]

    });
    return additionalInfo;
  }




  onEdit() {
    this.router.navigateByUrl("/volunteer/edit/" + this.id);

  }

  onClose() {
    console.log("came to close");
    this.router.navigateByUrl("/grid/volunteer");
  }

displayOccupationField(selectedOccupation){
       console.log(" selected occupation is--->"+ selectedOccupation);
       if(selectedOccupation=== 'Others')
       {
       console.log("yaay!!!!1");
     this.isVisible= true;


       }
       else
       {
       this.isVisible= false;

       }
     }
setOtherOccupation()
{

}

  onSubmit() {
    console.log("Insubmit");

     if(this.myForm.get('additionalInfo').get('interestedAreas').value){
        this.interestedList=this.myForm.get('additionalInfo').get('interestedAreas').value.map(interestedArea=>{return {"interestedArea":interestedArea.itemName,"interestedAreaId":interestedArea.id};});
        }
        if( this.myForm.get('personalInfo').get('occupation').value === 'Others')
        {

        this.myForm.get('personalInfo').get('occupation').setValue(this.myForm.get('personalInfo').get('others').value);

        }


     if (this.myForm.valid) {
      this.personalinfoupdated = this.myForm.get('personalInfo').value;

      delete this.personalinfoupdated.others;

      console.log("valid");
      let json = Object.assign(this.personalinfoupdated, this.myForm.get('address').value, { interestedAreas: this.interestedList },{volunteerPreferredTimes:this.myForm.get('additionalInfo').get('volunteerPreferredTimes').value});
      if (this.mode == 'edit') {
        json = Object.assign(json, { id: this.id });
      }

      console.log('submitting: ', json);

      let emailCheck: any;
      this.apiService.getData('volunteerPresent', this.myForm.get('personalInfo').get('email').value).subscribe(response1=>{
        emailCheck = JSON.parse(JSON.stringify(response1));
        if(emailCheck){
        if(!(this.mode=='edit')){
          alert('Volunteer already registered with same email Id');
          }
        }if(emailCheck === false || this.mode == 'edit'){
          let response = this.apiService.postData(json, 'volunteer');
          console.log("response is" + response);
          while (this.interestedList.length) {
            this.interestedList.pop();
          }
          if (response) {
            if (this.mode == 'edit') {
              alert('Succesfully updated Volunteer');
            } else {
              alert('Succesfully registered Volunteer');
            }
            this.router.navigateByUrl("/grid/volunteer");
          }
        }
      });

    }
    else { console.log("invalid");alert('please fill all the mandatory details / Fill all the detalis correctly'); } console.log("address is" + this.myForm.valid);
  }



}
