import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-college-registration',
  templateUrl: './college-registration.component.html',
  styleUrls: ['./college-registration.component.css']
})
export class CollegeRegistrationComponent  {
  collegeForm: FormGroup;


  private numberOfMOUs: number=0;
  private selectedTab: number=-1;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit() {
    this.collegeForm= this.formBuilder.group({
      collegeDetails: this.collegeDetails(),
      address: this.address(),
      mouDetails: this.formBuilder.array([this.mouDetails()])
    });
    this.numberOfMOUs=this.getMOUDetails().length;
    this.activateTab(this.numberOfMOUs);
  }

  collegeDetails(): FormGroup{
    return this.formBuilder.group({
      name: ['',[
        Validators.required, Validators.maxLength(50)
      ]],
      registrationId: ['',[
        Validators.maxLength(200)
      ]],
    });
  }

  address(): FormGroup{
    return this.formBuilder.group({
      addressLine1: ['', [
        Validators.required, Validators.maxLength(2000)
      ]],
      addressLine2: ['', [
        Validators.maxLength(2000)
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
  }

  mouDetails(): FormGroup{
    return this.formBuilder.group({
      mouID: ['',[
        Validators.required, Validators.maxLength(200)
      ]],
      mouName: ['', [
        Validators.required, Validators.maxLength(10)
      ]],
      noOfEvents: ['', [
        Validators.required, Validators.maxLength(2)
      ]],
      fromDate: [],
      toDate: [],
      comments: ['', [
        Validators.maxLength(200)
      ]]
    });
  }

  getMOUDetails(): FormArray{
    return this.collegeForm.get('mouDetails') as FormArray;
  }

  addMOU():void{
    if(this.numberOfMOUs<10){
      (this.getMOUDetails()).push(this.mouDetails());
      this.numberOfMOUs=this.getMOUDetails().length;
    
    }
  }
  removeMOU(): void{
    if(this.numberOfMOUs>1){
      (this.getMOUDetails()).removeAt(this.numberOfMOUs-1);
      this.numberOfMOUs=this.getMOUDetails().length;
      this.selectedTab=this.numberOfMOUs-1;
    }
  }

  getNumberOfMOUs(): Number{
    return this.numberOfMOUs;
  }

  isMaxLimitReached(val):boolean{
    return this.numberOfMOUs>=val;
  }

  getArray(val): number[]{
    return Array(val);
  }

  activateTab(val): void{
      this.selectedTab=val-1;
  }

  onSubmit(){
    console.log('inside method onsubmit');
    let json= Object.assign({mouDetails:this.getMOUDetails().value}, this.collegeForm.get('collegeDetails').value, this.collegeForm.get('address').value);
    console.log('submitting: ',json);
    this.apiService.postData(json,'collegeregistration');
    
  }
  

}
