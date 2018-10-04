import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public data: any[] = [];
  public index: number;

  constructor(private cart: CartService, private router: Router, private http: HttpClient) {
    this.get();
  }

  ngOnInit() {
  }

  get() {
    this.data = this.cart.data;
  }

  loginOrLogout() {
    if (localStorage.getItem('token') === '') {
      this.router.navigate(['/login']);
    } else {
      localStorage.setItem('token', '');
    }
  }

  toHome() {
    this.router.navigate(['']);
  }
  toSearch() {
    this.router.navigate(['/search']);
  }

  del(items: any) {
    console.log(items);
    for (let i = 0; i < this.cart.data.length; i++) {
      console.log(items.id);
      if (this.cart.data[i].name === items.name) {
        this.index = i;
        console.log("success: " + this.cart.data[i].id + " " + items.id);
        break;
      }
    }
    console.log(this.index);
    this.cart.removeItem(this.index);
  }

  send(items: any) {

    this.http.post('http://127.0.0.1:8000/api/orders/add', {
      product_id: items.id,
      token: localStorage.getItem('token')
    }).subscribe(data => {
      console.log(data);
    },
      error => {
        console.log(error);
      });
  }

  customTB(index, song) {
    return `${index}-${song.id}`;
  }

}
