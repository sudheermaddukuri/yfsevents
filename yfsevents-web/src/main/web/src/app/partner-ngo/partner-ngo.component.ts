import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray }  from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-partner-ngo',
  templateUrl: './partner-ngo.component.html',
  styleUrls: ['./partner-ngo.component.css']
})
export class PartnerNGOComponent implements OnInit {

  myForm: FormGroup;

  private numberOfAuthorisedPersons: number=0;
  private selectedTab: number=-1;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) { }

  ngOnInit() {
    console.log('Loading PartnerNgo Screen');
    this.myForm = this.formBuilder.group({
      basicInfo: this.partnerNgoGroup(),
      address: this.address(),
      authorisedPersons: this.formBuilder.array([this.authorisedPerson()])
    });
    this.numberOfAuthorisedPersons=this.getAuthorisedPersons().length;
    this.activateTab(this.numberOfAuthorisedPersons);
  }

  partnerNgoGroup(): FormGroup{
    return this.formBuilder.group({
      name: ['',[
        Validators.required, Validators.maxLength(200)
      ]],
      description: ['',[
        Validators.maxLength(200)
      ]],
      branch: ['',[
        Validators.maxLength(200)
      ]],
      registrationNumber: ['', [
        Validators.maxLength(200)
      ]]
      //todo: registrationNumber Validation.
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

  authorisedPerson(): FormGroup{
    return this.formBuilder.group({
      name: ['',[
        Validators.required, Validators.maxLength(200)
      ]],
      contact1: ['', [
        Validators.required, Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)
      ]],
      contact2: ['', [
        Validators.pattern("^[0-9]+$"), Validators.minLength(10), Validators.maxLength(10)
      ]],
      email1: ['', [
        Validators.email, Validators.maxLength(50)
      ]],
      email2: ['', [
        Validators.email, Validators.maxLength(50)
      ]]
    });
  }

  getAuthorisedPersons(): FormArray{
    return this.myForm.get('authorisedPersons') as FormArray;
  }

  addAuthorisedPerson():void{
    if(this.numberOfAuthorisedPersons<5){
      (this.getAuthorisedPersons()).push(this.authorisedPerson());
      this.numberOfAuthorisedPersons=this.getAuthorisedPersons().length;
      //this.activateTab(this.numberOfAuthorisedPersons);
    }
  }

  removeAuthorisedPerson(index): void{
    if(this.numberOfAuthorisedPersons>1){
      (this.getAuthorisedPersons()).removeAt(index);
      this.numberOfAuthorisedPersons=this.getAuthorisedPersons().length;
      this.selectedTab=this.numberOfAuthorisedPersons-1;
    }
  }

  getNumberOfAuthorisedPersons(): Number{
    return this.numberOfAuthorisedPersons;
  }

  isMaxLimitReached(val):boolean{
    return this.numberOfAuthorisedPersons>=val;
  }

  getArray(val): number[]{
    return Array(val);
  }

  activateTab(val): void{
      this.selectedTab=val-1;
  }

  onSubmit(){
    let json= Object.assign({authorizedPerson:this.getAuthorisedPersons().value}, this.myForm.get('basicInfo').value, this.myForm.get('address').value);
    console.log('submitting: ',json);
    this.apiService.postData(json,'partnerngo');
    //To test only
    // this.apiService.getData('partnerngo');
  }
}
