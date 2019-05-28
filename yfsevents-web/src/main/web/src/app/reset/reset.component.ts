import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
      this.app.authenticate(this.user, () => {
          this.router.navigateByUrl('/events');
      });
      return false;
    }

}
