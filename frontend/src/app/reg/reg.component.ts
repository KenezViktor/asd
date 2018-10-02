import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  error: string;

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  sendRegData() {
    if (this.email == null || this.password == null || this.username == null) {
      this.error = 'fill every inputs please';
    } else {
      this.error = '';
      this.backend.username = this.username;
      this.backend.password = this.password;
      this.backend.email = this.email;
      this.backend.registration();
    }
  }

}
