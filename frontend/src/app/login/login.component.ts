import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string;

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  sendLoginData() {
    if (this.password == null || this.username == null) {
      this.error = 'fill every inputs please';
    } else {
      this.backend.username = this.username;
      this.backend.password = this.password;
      this.backend.login();
    }
  }
}
