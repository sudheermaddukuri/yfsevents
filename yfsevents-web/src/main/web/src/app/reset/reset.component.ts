import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
showReset = false;
errorMessage = "";
successMessage = "";

 user = {username: '', password: '', resetToken:''};

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  checkEmail(event) {

      this.apiService.getData('preresetpassword', this.user.username, false).subscribe(
      response=>{

       let result:any=JSON.parse(JSON.stringify(response));
       if(!response['userExists']) {

         this.errorMessage = "Email id doesn't exists";
       } else if(response['userExists'] && !response['mailsent']) {
         this.errorMessage= "Unable to send email";
       } else if(response['userExists'] && response['mailsent']) {
          this.errorMessage= "";
          this.successMessage= "Please check email, enter token and new password";
          this.showReset = true;
       }

       });
  return false;
    };

      reset(event) {
       this.successMessage='';

      if(this.user.password.length < 8) {
       this.errorMessage= "Password length should be more than 8";
       return false;
      }

          this.apiService.post( this.user, 'resetpassword').subscribe(response=>{

             let result:any=JSON.parse(JSON.stringify(response));
             if(response['reset']) {

                      this.router.navigateByUrl('/login');
                    } else  {
                      this.errorMessage= "Unable to reset password";
                    }
             });
          return false;
        }

}
