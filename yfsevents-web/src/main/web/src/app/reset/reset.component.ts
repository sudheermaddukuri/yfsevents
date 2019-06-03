import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

 user = {username: '', password: '', password:''};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  checkEmail() {

      this.apiService.getData('preresetpassword', this.user.username, false).subscribe(response=>{

                                                                                         let result:any=JSON.parse(JSON.stringify(response));
                                                                                         });
      return false;
    };

      reset() {

          this.apiService.post( this.user, 'resetpassword').subscribe(response=>{

                                                                                             let result:any=JSON.parse(JSON.stringify(response));
                                                                                             });
          return false;
        }

}
