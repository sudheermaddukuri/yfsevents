import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray }  from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-partner-ngo',
  templateUrl: './partner-ngo.component.html',
  styleUrls: ['./partner-ngo.component.css']
})
export class PartnerNGOComponent implements OnInit, AfterViewInit {

  myForm: FormGroup;

  private numberOfAuthorizedPersons: number=0;
  private selectedTab: number=-1;
  private mode: String;
  private id: number;

  constructor(private formBuilder: FormBuilder,
             private apiService: ApiService,
             private route: ActivatedRoute){ }

  ngOnInit() {
    console.log('Loading PartnerNgo Screen');
    this.myForm = this.formBuilder.group({
      basicInfo: this.partnerNgoGroup(),
      address: this.address(),
      authorizedPersons: this.formBuilder.array([this.authorisedPerson()])
    });

    this.route.paramMap.subscribe(params=>{
      console.log(params);
      this.mode=params.get('mode');
      this.id=+params.get('id');
      if(!isNaN(this.id)){
        this.apiService.getData('partnerngo',this.id).subscribe(data =>{
          console.log("GetResponse: "+data);
          this.myForm.setValue(data);
          this.myForm.get('basicInfo').setValue(data);
          this.myForm.get('address').setValue(data);
          this.myForm.get('authorizedPersons').setValue(data);
          this.myForm.updateValueAndValidity(data);
        });
      }else{

      }
    });
    // if(this.route.snapshot.paramMap.get('mode')){
    //   this.mode = this.route.snapshot.paramMap.get('mode');
    //   this.id = +this.route.snapshot.paramMap.get('id');
      
    // }

    this.numberOfAuthorizedPersons=this.getAuthorizedPersons().length;
    this.activateTab(1);
  }

  ngAfterViewInit(){
    if(this.mode==='view'){
      Array.from(document.getElementsByClassName('form-control')).forEach(element => {
        (<HTMLInputElement>element).disabled = true;
      });
    }
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

  getAuthorizedPersons(): FormArray{
    return this.myForm.get('authorizedPersons') as FormArray;
  }

  addAuthorisedPerson():void{
    if(this.numberOfAuthorizedPersons<5){
      (this.getAuthorizedPersons()).push(this.authorisedPerson());
      this.numberOfAuthorizedPersons=this.getAuthorizedPersons().length;
      //this.activateTab(this.numberOfAuthorizedPersons);
    }
  }

  removeAuthorisedPerson(index): void{
    if(this.numberOfAuthorizedPersons>1){
      // var authorizedPerson = this.getAuthorizedPersons();
      // var name = authorizedPerson[index].get('name');
      // confirm("Do you want to delete "
      if(confirm("Do you want to delete ")){
        (this.getAuthorizedPersons()).removeAt(index);
        this.numberOfAuthorizedPersons=this.getAuthorizedPersons().length;
        if(this.selectedTab==this.numberOfAuthorizedPersons)
          this.selectedTab=this.numberOfAuthorizedPersons-1;
      }
    }else{

    }
  }

  getNumberOfAuthorizedPersons(): Number{
    return this.numberOfAuthorizedPersons;
  }

  isMaxLimitReached(val):boolean{
    return this.numberOfAuthorizedPersons>=val;
  }

  isMinLimitReached():boolean{
    return this.numberOfAuthorizedPersons===1;
  }

  getArray(val): number[]{
    return Array(val);
  }

  activateTab(val): void{
      this.selectedTab=val-1;
  }

  onSubmit(){
    let json= Object.assign({authorizedPerson:this.getAuthorizedPersons().value}, this.myForm.get('basicInfo').value, this.myForm.get('address').value);
    console.log('submitting: ',json);
    this.apiService.postData(json,'partnerngo');
    //To test only
    // this.apiService.getData('partnerngo');
  }
}
