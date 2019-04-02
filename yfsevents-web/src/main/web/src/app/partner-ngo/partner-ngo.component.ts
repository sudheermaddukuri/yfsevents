import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, FormArray }  from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {NgOnChangesFeature}from '@angular/core/src/render3';
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
             private route: ActivatedRoute,
             private router: Router){ }

  ngOnInit() {
    console.log('Loading PartnerNgo Screen');
    this.myForm = this.formBuilder.group({
      basicInfo: this.partnerNgoGroup(),
      address: this.address(),
      authorizedPersons: this.formBuilder.array([this.authorisedPerson()])
    });

    this.route.paramMap.subscribe(params=>{
      console.log(params);
      if(params.get('mode')){
        this.mode=params.get('mode');
        this.id=+params.get('id');
      }
      if(this.id){
        if(!isNaN(this.id)){
          // let data={basicInfo: {name:"name", description:"desc", branch:"branch", registrationNumber:"regNum"},
          //           address: {addressLine1: "add1", addressLine2: "add2", city: "city", state: "state", pincode:"pin"},
          //           authorizedPersons: [{name: "a1", contact1: "c1", contact2: "c2", email1: "e1", email2: "e2"},
          //           {name: "a1", contact1: "c1", contact2: "c2", email1: "e1", email2: "e2"}
          // ]};
          this.apiService.getData('partnerngo',this.id, true).subscribe(result =>{
            let data=JSON.parse(JSON.stringify(result));
            console.log("GetResponse: "+data);
            if(data.authorizedPersons){
              data.authorizedPersons.forEach((authorizedPerson, index) =>{
                if(index!=0){
                  this.addAuthorisedPerson();
                }
              });
            }
            this.myForm.setValue(data);
          });
        }else{
          alert('Error in ID');
        }
      }
    });

    this.numberOfAuthorizedPersons=this.getAuthorizedPersons().length;
    this.activateTab(1);

  }

  ngAfterViewInit(){
    if(this.mode=='view'){
      Array.from(document.getElementsByClassName('form-control')).forEach(element => {
        (<HTMLInputElement>element).disabled = true;
        //TODO: Disable add/remove buttons
      });
    }else{
      Array.from(document.getElementsByClassName('form-control')).forEach(element => {
        (<HTMLInputElement>element).disabled = false;
        //TODO: Enable add/remove buttons
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

  onUpdate(){
    //TODO
  }

  onEdit(){
    //TODO: instead change mode and make fields Editable.
    this.router.navigateByUrl("/partnerngo/edit/"+this.id);
  }

  onClose(){
    this.router.navigateByUrl("/grid/partnerngo");
  }

  checkForMandatoryValidations(partnerNgoDetails) {
   let checkflag:boolean=false;
    if (partnerNgoDetails.name && partnerNgoDetails.addressLine1 && partnerNgoDetails.city && partnerNgoDetails.state)
     
       {
         if(partnerNgoDetails.authorizedPerson.length)
         {
            partnerNgoDetails.authorizedPerson.forEach(o =>{
              if(!o.name || !o.contact1)
              {
                checkflag = true;
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
  onSubmit(){
    let json= Object.assign({authorizedPerson:this.getAuthorizedPersons().value}, this.myForm.get('basicInfo').value, this.myForm.get('address').value);
    if(this.mode=='edit'){
      json=Object.assign(json, {id:this.id});
    }
    console.log('submitting: ',json);
    if(this.checkForMandatoryValidations(json)){
    let response = this.apiService.postData(json,'partnerngo');
    if(response){
      if(this.mode=='edit'){
        alert('Succesfully updated Partner NGO');
      }else{
        alert('Succesfully registered Partner NGO');
      }
      this.router.navigateByUrl("/grid/partnerngo");
    }
  }
  else{
    alert('Please fill out the mandatory fields');
  }
  }
}
