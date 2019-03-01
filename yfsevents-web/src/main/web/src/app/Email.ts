export class Email
{
  to:string;
  cc:string;
  bcc:string;
  subject:string;
  text:string;

  constructor(values:Object={})
  {
    Object.assign(this,values);
  }
}
