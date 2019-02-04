import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray }  from '@angular/forms';

@Component({
  selector: 'app-partner-ngo',
  templateUrl: './partner-ngo.component.html',
  styleUrls: ['./partner-ngo.component.css']
})
export class PartnerNGOComponent implements OnInit {

  myForm: FormGroup;

  private numberOfAuthorisedPersons=0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      let me = this;
      this.numberOfAuthorisedPersons=0;
      this.myForm = this.formBuilder.group({
        basicInfo: this.partnerNgoGroup(),
        address: this.address(),
        authorisedPersons: [this.formBuilder.array([this.authorisedPerson()]), [
          Validators.required
        ]]
      });
  }

  partnerNgoGroup(): FormGroup{
    let me=this;
    const aboutPartnerNgo = this.formBuilder.group({
      name: ['',[
        Validators.required, Validators.name, Validators.maxLength(200)
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
    return aboutPartnerNgo;
  }

  address(): FormGroup{
    let me=this;
    const address = this.formBuilder.group({
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
    return address;
  }

  authorisedPerson(): FormGroup{
    let me=this;
    const authorisedPerson = this.formBuilder.group({
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
    this.numberOfAuthorisedPersons++;
    return authorisedPerson;
  }

  addAuthorisedPerson():void{
    if(this.numberOfAuthorisedPersons<5){
      (this.myForm.get('authorisedPersons') as FormArray).push(this.authorisedPerson());
    }
  }

  deleteAuthorisedPerson(index): void{

  }

  getNumberOfAuthorisedPersons(): Number{
    return this.numberOfAuthorisedPersons;
  }

  fx(val){
    console.log(val);
  }

}
