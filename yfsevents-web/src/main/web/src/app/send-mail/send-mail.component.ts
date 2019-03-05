import { Component, OnInit } from '@angular/core';
import {Email} from "../Email";
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../api.service";
import {ApiServiceMail} from "../api.service.mail";

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  public email:Email;
  constructor(
              private apiServiceMail: ApiServiceMail) { }
  ngOnInit() {
    this.email= new Email({to:"rainatushar221995@gmail.com,random1@gmail.com",cc:"",bcc:"",subject:"",text:""});
  }
  public onFormSubmit({value}:{value:Email}) {
    console.log(value);
    this.apiServiceMail.postData(this.email,"String");
  }
  // {to:"to",cc:"cc",bcc:"bcc",subject:"subject",text:"text"}
}
