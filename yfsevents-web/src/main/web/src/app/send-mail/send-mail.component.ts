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
  public resp:string;
  constructor(
              private apiServiceMail: ApiServiceMail,private route: ActivatedRoute,public router:Router) { }
  ngOnInit() {
    
    this.eventData=new Eventdata();
    this.eventData.eventCategory='abc';
    this.eventData.eventfromTime="2017-07-23 13:10:11";
    this.eventData.eventtoTime="2017-07-23 18:10:11";
    this.eventData.eventName="Blood Donation Camp";
    this.eventData.ngoName="YouthForSeva";
    
    this.email=new Email({to:"",cc:"",bcc:"",
    text:"",eventId:312,subject:this.createDefaultSubject(this.eventData.eventName,
      this.eventData.ngoName,this.eventData.eventfromTime,this.eventData.eventtoTime)});
      this.getEmailId();
      console.log(this.resp);
      console.log(this.email.to);
  }

  public onFormSubmit({value}:{value:Email}) {
    console.log(value);
    console.log(this.route.snapshot.paramMap.get("name"));
    //this.eventData.eventCategory='abc';
    this.apiServiceMail.postData(this.email);
    this.router.navigate(['/events']); 

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
     
     console.log(this.resp+" ...."+response.toString);
     this.email.to=this.resp;
    });
  }
}
