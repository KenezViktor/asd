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

  constructor(private _backend: BackendService, private router: Router) {
    localStorage.setItem('token', '');
  }

  ngOnInit() {
  }

  loginOrLogout() {
    if (localStorage.getItem('token') === '') {
      this.router.navigate(['/login']);
    } else {
      localStorage.setItem('token', '');
    }
  }

  toCart() {
    this.router.navigate(['/cart']);
  }
}
