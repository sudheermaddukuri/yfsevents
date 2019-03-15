import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray }  from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-partner-ngo',
  templateUrl: './partner-ngo.component.html',
  styleUrls: ['./partner-ngo.component.css']
})
export class PartnerNGOComponent implements OnInit {

  myForm: FormGroup;

  private numberOfAuthorisedPersons: number=0;
  private selectedTab: number=-1;
  //private mode: String='new';
  //private id: LongRange;

  constructor(private formBuilder: FormBuilder,
             private apiService: ApiService
             //,
      //       private route: ActivatedRoute)
       { }

  ngOnInit() {
    console.log('Loading PartnerNgo Screen');
    this.myForm = this.formBuilder.group({
      basicInfo: this.partnerNgoGroup(),
      address: this.address(),
      authorisedPersons: this.formBuilder.array([this.authorisedPerson()])
    });

   // this.route.params.subscribe(params=>{
     // this.mode=params['mode']||this.mode;
      //this.id=params['id']||null;

    //});

    this.numberOfAuthorisedPersons=this.getAuthorisedPersons().length;
    this.activateTab(1);
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
      // var authorizedPerson = this.getAuthorisedPersons();
      // var name = authorizedPerson[index].get('name');
      // confirm("Do you want to delete "
      if(confirm("Do you want to delete ")){
        (this.getAuthorisedPersons()).removeAt(index);
        this.numberOfAuthorisedPersons=this.getAuthorisedPersons().length;
        if(this.selectedTab==this.numberOfAuthorisedPersons)
          this.selectedTab=this.numberOfAuthorisedPersons-1;
      }
    }else{

    }
  }

  getNumberOfAuthorisedPersons(): Number{
    return this.numberOfAuthorisedPersons;
  }

  isMaxLimitReached(val):boolean{
    return this.numberOfAuthorisedPersons>=val;
  }

  isMinLimitReached():boolean{
    return this.numberOfAuthorisedPersons===1;
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
