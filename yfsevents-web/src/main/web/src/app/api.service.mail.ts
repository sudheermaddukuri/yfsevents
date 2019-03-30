import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceMail {

  private basicURL:string="/sendEmail"
  private basicURLVolunteer:string="/api"
  private urlList=new Map<string, string>();

  constructor(private http:HttpClient) {
    this.initialiseUrlList();
  }

  initialiseUrlList():void{
    this.urlList.set('send', '/send');
    this.urlList.set('getEmail','/volunteer/email');
  }
  postData(data){
    console.log('postingggg', data);
    this.http.post(this.basicURL+this.urlList.get("send"),data).subscribe(response=>{
      console.log('postResponse: ',response);
      alert("Sucessfully Sent Email");
    });
  }
  getData(){
    let uri : string =this.basicURLVolunteer+this.urlList.get("getEmail");
    return this.http.get(uri);
  }
}
