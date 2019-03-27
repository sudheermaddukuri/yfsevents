import{Injectable}from'@angular/core';
import {User}from "../model/model.user";
import {Http}from "@angular/http";
import {AppComponent}from "../app.component";
import {map}from 'rxjs/operators';


@Injectable()
export class UserService {
constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/user/register',user)
      .pipe(map(resp=>resp.json()));
  }
}
