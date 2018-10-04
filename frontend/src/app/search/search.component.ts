import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendService} from '../backend.service';
import {HttpClient} from '@angular/common/http';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  param: string;
  public data: any = '';
  public quantity: any =  0;
  public login: string = "Login";

  constructor(private router: Router, private backend: BackendService, private http: HttpClient, private cart: CartService) { }

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

  search() {
    return this.http.post('http://localhost:8000/api/product/one', {
      name: this.param
    })
      .subscribe( data => {
          console.log(JSON.stringify(data));
          this.data = data;
        },
        error => {
          console.log(error);
        });
  }

  add(data: any) {
    this.cart.addItem(data);
  }

  toCart() {
    this.router.navigate(['/cart']);
  }
  toHome() {
    this.router.navigate(['']);
  }

}
