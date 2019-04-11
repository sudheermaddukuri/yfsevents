import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import {Email} from "../Email";
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../api.service";
import {ApiServiceMail} from "../api.service.mail";
import { HttpErrorResponse } from '@angular/common/http';
import{Eventdata} from "../events/add-event.component";
import { formatDate, DatePipe } from '@angular/common';
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  public email:Email;
  public eventData:Eventdata;
  public resp:string;
  pipe:any;
  constructor(private apiService:ApiService,
              private apiServiceMail: ApiServiceMail,private route: ActivatedRoute,public router:Router) { }
  ngOnInit() {
    this.pipe = new DatePipe('en-US');
    this.eventData=new Eventdata();
    this.email=new Email({to:"",cc:"",bcc:"",
    text:"",eventId:this.route.snapshot.paramMap.get('id'),subject:""});
    this.apiService.getData('event',this.route.snapshot.paramMap.get('id'), false).subscribe((data:any)=>{
      this.eventData.eventfromTime=data.eventfromTime;
      this.eventData.eventtoTime=data.eventtoTime;
      this.eventData.ngoName=data.ngoName;
      this.eventData.eventName=data.eventName;
      this.email.subject=this.createDefaultSubject(this.eventData.eventName,
        this.eventData.ngoName,this.eventData.eventfromTime,this.eventData.eventtoTime);
      console.log(this.eventData.eventfromTime);
      console.log(this.eventData.eventtoTime);
      console.log(this.eventData.ngoName);
      console.log(this.eventData.eventName);
      this.getEmailId();
      console.log(this.resp);
      console.log(this.email.to);
    },( err:HttpErrorResponse)=>{
      console.log(err.message);
   });
    



  }

  public onFormSubmit({value}:{value:Email}) {
    console.log(value);
    console.log(this.route.snapshot.paramMap.get("name"));
    //this.eventData.eventCategory='abc';
    this.apiServiceMail.postData(this.email);
     

  }
  public createDefaultSubject(eventName,ngoName,eventTo,eventFor)
  {
    return "We invite You for event : " + eventName + "by NGO : "+ngoName+" from :"+eventFor+"to : "+eventTo; 
  }
  public  getEmailId()
  {
    //String resp;
    this.apiServiceMail.getData().subscribe(response=>{
      console.log('postResponse: ',response);
     //return response.toString();
     this.resp=response.toString();
     
     console.log("reponse is:"+" ...."+(response as any).result);
     this.email.to=this.resp;
    });
  }
}
