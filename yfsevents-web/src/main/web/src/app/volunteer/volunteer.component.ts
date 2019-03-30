import { Component, OnInit, Injectable, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service'
import { HttpErrorResponse } from '@angular/common/http';
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
  interestedAreasCategory: any[];
  selected: any[] = new Array();
  selectedList: any[];
  interestedList: any[] = new Array();
  private mode: String;
  private id: number;
  dropdownSettings = {};


  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.myForm = this.formBuilder.group({
      personalInfo: this.personalInfo(),
      address: this.address(),
      additionalInfo: this.additionalInfo()

    });
    this.interestedAreasCategory = [
      { "id": 1, "itemName": "Education" },
      { "id": 2, "itemName": "Health" },
      { "id": 3, "itemName": "Environment" }

    ];







    this.dropdownSettings = {
      singleSelection: false,
      text: "Select interested Areas",
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


            if (data.additionalInfo.interestedAreas) {
              data.additionalInfo.interestedAreas.forEach((interestedArea, index) => {
                if (index != 0) {


                  this.selected.push({ "id": interestedArea["id"], "itemName": interestedArea["interestedArea"] });

                }

              });
              this.setSelectedList(this.selected);
            }
            this.myForm.setValue(data);
          });
        } else {
          alert('Error in ID');
        }
      }
    });

  }
  setSelectedList(selected) {
    console.log("came to selected");
    this.selectedList = selected;
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
      phonePrefix: ['', []],
      alternatePhonePrefix: ['', []],
      email: ['', [
        Validators.email, Validators.maxLength(50)
      ]],
      alternateEmail: ['', [
        Validators.email, Validators.maxLength(50)
      ]]
    });
    return aboutVolunteer;
  }

  address(): FormGroup {

    const address = this.formBuilder.group({
      locality: ['', [
        Validators.required, Validators.maxLength(2000)
      ]],
      state: ['', [
        Validators.required, Validators.maxLength(50)
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
      interestedAreas: [this.formBuilder.array([this.interestedArea]), [

      ]],

    });
    return additionalInfo;
  }
  interestedArea(): FormGroup {
    return this.formBuilder.group({
      interestedArea: ['', [

      ]]

    });
  }



  onEdit() {
    this.router.navigateByUrl("/volunteer/edit/" + this.id);

  }

  onClose() {
    console.log("came to close");
    this.router.navigateByUrl("/grid/volunteer");
  }



  onSubmit() {
    console.log("Insubmit");
    if (this.selectedList) {
      for (var val of this.selectedList) {
        console.log("interestedArea:" + val["itemName"]);
        this.interestedList.push({ "interestedArea": val["itemName"] });

      }
    }
    console.log(this.address); if (this.myForm.valid) {
      console.log("valid");
      let json = Object.assign(this.myForm.get('personalInfo').value, this.myForm.get('address').value, { interestedAreas: this.interestedList });
      if (this.mode == 'edit') {
        json = Object.assign(json, { id: this.id });
      }

      console.log('submitting: ', json);

      let response = this.apiService.postData(json, 'volunteer');
      console.log("boolean is" + response);
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
    else { console.log("invalid"); } console.log("address is" + this.myForm.valid);
  }


  fx(val) {
    console.log(val);
  }

}
