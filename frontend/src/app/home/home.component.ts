import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public returnedData: any;
  public login: string = "Login";

  constructor(private backend: BackendService, private router: Router) {
    localStorage.setItem('token', '');
  }

  ngOnInit() {
  }

  loginOrLogout() {
    if (localStorage.getItem('token') === '') {
      this.login = "Logout";
      this.router.navigate(['/login']);
    } else {
      this.login = "Login";
      this.backend.token = localStorage.getItem('token');
      localStorage.setItem('token', '');
      this.backend.logout();
    }
  }

  toCart() {
    this.router.navigate(['/cart']);
  }
}
