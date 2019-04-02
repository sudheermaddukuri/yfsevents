import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-college-registration',
  templateUrl: './college-registration.component.html',
  styleUrls: ['./college-registration.component.css']
})
export class CollegeRegistrationComponent {
  collegeForm: FormGroup;


  private numberOfMOUs: number = 0;
  private selectedTab: number = -1;
  private mode: String;
  private id: number;
  moustatusinfo:string[]=['Active','InActive','Suspended'];
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.collegeForm = this.formBuilder.group({
      collegeDetails: this.collegeDetails(),
      address: this.address(),
      mouDetails: this.formBuilder.array([this.mouDetails()])
    });
    this.numberOfMOUs = this.getMOUDetails().length;
    this.activateTab(this.numberOfMOUs);

    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.mode = params.get('mode');
      this.id = +params.get('id');
      if (!isNaN(this.id)) {

        this.apiService.getData('collegeregistration', this.id, true).subscribe(result => {
          let data = JSON.parse(JSON.stringify(result));
          console.log("GetResponse: " + data);
          if (data.mouDetails) {
            data.mouDetails.forEach((mou, index) => {
              if (index != 0) {
                this.addMOU();
              }
            });
          }
          this.collegeForm.setValue(data);
        });
      } else {
        alert('Error in ID');
      }
    });
  }

  collegeDetails(): FormGroup {
    return this.formBuilder.group({
      name: ['', [
        Validators.required, Validators.maxLength(50)
      ]],
      registrationId: ['', [
        Validators.maxLength(200)
      ]],
    });
  }

  address(): FormGroup {
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

  mouDetails(): FormGroup {
    return this.formBuilder.group({
      mouID: ['', [
        Validators.required, Validators.maxLength(200)
      ]],
      mouStatus: ['', [
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

  getMOUDetails(): FormArray {
    return this.collegeForm.get('mouDetails') as FormArray;
  }

  addMOU(): void {
    if (this.numberOfMOUs < 10) {
      (this.getMOUDetails()).push(this.mouDetails());
      this.numberOfMOUs = this.getMOUDetails().length;

    }
  }
  removeMOU(): void {
    if (this.numberOfMOUs > 1) {
      (this.getMOUDetails()).removeAt(this.numberOfMOUs - 1);
      this.numberOfMOUs = this.getMOUDetails().length;
      this.selectedTab = this.numberOfMOUs - 1;
    }
  }

  getNumberOfMOUs(): Number {
    return this.numberOfMOUs;
  }

  isMaxLimitReached(val): boolean {
    return this.numberOfMOUs >= val;
  }

  getArray(val): number[] {
    return Array(val);
  }

  activateTab(val): void {
    this.selectedTab = val - 1;
  }

  checkForMandatoryValidations(collegeDetails) {
    let checkflag:boolean=false;
    if (collegeDetails.name && collegeDetails.registrationId && collegeDetails.addressLine1 && collegeDetails.city && collegeDetails.state
      && collegeDetails.pincode) {

      if (collegeDetails.mouDetails.length) {
        collegeDetails.mouDetails.forEach(o => {
          if (!o.mouID || !o.mouStatus || !o.mouName) {
            checkflag=true;
            return false;
          }
          
        })
        if(!checkflag)
        {
          return true;
        }
      }
      else{
      return true;
      }
    }
    else
      return false;

  }

  onSubmit() {
    console.log('inside method onsubmit');
    let json = Object.assign({ mouDetails: this.getMOUDetails().value }, this.collegeForm.get('collegeDetails').value, this.collegeForm.get('address').value);
    if (this.mode == 'edit') {
      json = Object.assign(json, { id: this.id });
    }

    console.log('submitting: ', json);
    if (this.checkForMandatoryValidations(json)) {
      let response = this.apiService.postData(json, 'collegeregistration');
      if (response) {
        if (this.mode == 'edit') {
          alert('Succesfully updated College Details');
        } else {
          alert('Succesfully registered College Details');
        }
        this.router.navigateByUrl("grid/collegeregistration");
      }

    }
    else {
      alert('Please fill out the mandatory fields');
    }
  }


}








