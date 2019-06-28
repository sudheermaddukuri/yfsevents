import{Eventdata} from "./events/add-event.component"
export class Email
{
  to:string;
  cc:string;
  bcc:string;
  subject:string;
  text:string;
  eventId: number;
  eventName:string;
  ngonames:string;
  startTime:string;
  endTime:string;

  constructor(values:Object={})
  {
    console.log(values);
    
    Object.assign(this,values);
  }
}
