import { Component, OnInit,Injectable } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators,FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  myForm: FormGroup;



    constructor(private formBuilder: FormBuilder,
                private apiService:ApiService) { }

    ngOnInit() {

        this.myForm = this.formBuilder.group({
          personalInfo: this.personalInfo(),
          address: this.address(),
          additionalInfo:this.additionalInfo()
        });
    }

    personalInfo(): FormGroup{

      const aboutVolunteer= this.formBuilder.group({
         firstName: ['',[
                  Validators.required, Validators.maxLength(50)
                ]],
                lastName: ['',[
                                     Validators.required, Validators.maxLength(50)
                                   ]],

                phoneNumber: ['', [
                  Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)
                ]],
                alternatePhoneNumber: ['', [
                  Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)
                ]],
                phonePrefix:['',[]],
                alternatePhonePrefix:['',[]],
                email: ['', [
                  Validators.email, Validators.maxLength(50)
                ]],
               alternateEmail: ['', [
                  Validators.email, Validators.maxLength(50)
                ]]
      });
      return aboutVolunteer;
    }

    address(): FormGroup{

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
    additionalInfo(): FormGroup{
           let me=this;
           const additionalInfo = this.formBuilder.group({
             interestedAreas: ['', [
               Validators.maxLength(2000)
             ]],

           });
           return additionalInfo;
         }

    onSubmit(){console.log("Insubmit");console.log(this.address);if (this.myForm.valid) {
                                                   console.log("valid");
                                                   let json= Object.assign(this.myForm.get('personalInfo').value, this.myForm.get('address').value);
                                                       console.log('submitting: ',json);
                                                       this.apiService.postData(json,'volunteer-create');

                                                       // this.apiService.getData('partnerngo');
                                               }
                                               else{console.log("invalid");}console.log("address is"+this.myForm.valid);
}


    fx(val){
      console.log(val);
    }

  }
