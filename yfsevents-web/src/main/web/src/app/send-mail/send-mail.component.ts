import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import {Email} from "../Email";
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../api.service";
import {ApiServiceMail} from "../api.service.mail";
import{EventEmiterService} from"../services/event.emmiter.service";
import{Eventdata} from "../events/add-event.component"
@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  public email:Email;
  public eventData:Eventdata;
  constructor(
              private apiServiceMail: ApiServiceMail,private route: ActivatedRoute) { }
  ngOnInit() {
    this.eventData=new Eventdata();
    this.eventData.eventCategory='abc';
    this.eventData.eventfromTime="2 a.m";
    this.eventData.eventtoTime="4 p.m";
    this.eventData.eventName="Blood Donation Camp";
    this.eventData.ngoName="YouthForSeva";
    this.email=new Email({to:this.getEmailId(),cc:"",bcc:"",
    subject:"",text:this.createDefaultSubject(this.eventData.eventName,
      this.eventData.ngoName,this.eventData.eventfromTime,this.eventData.eventtoTime)});
      this.email.event=this.eventData;

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
    this.apiServiceMail.getData().subscribe(response=>{
      console.log('postResponse: ',response);
     return response.toString();
    });
  }
}
