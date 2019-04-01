import{Eventdata} from "./events/add-event.component"
export class Email
{
  to:string;
  cc:string;
  bcc:string;
  subject:string;
  text:string;
  eventId: number;

  constructor(values:Object={})
  {
    Object.assign(this,values);
  }
}
