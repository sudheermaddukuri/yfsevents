import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Y4S';
  static API_URL = 'http://localhost:8080';


  constructor(private app: AppService, private http: HttpClient, private router: Router) {
        this.app.authenticate(undefined, undefined);
      }

      isAdmin() {
        return  this.app.authenticated && this.app.role == 'ROLE_ADMIN';
      }
      isUser() {
              return  this.app.authenticated && this.app.role == 'ROLE_USER';
            }


   logout() {
    this.http.get('logout').subscribe((response)=>{
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');}
      );
   }
}
