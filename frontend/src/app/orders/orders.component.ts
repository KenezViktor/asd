import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public data: any;

  constructor(private http: HttpClient) {
    this.getOrders();
  }

  ngOnInit() {
  }

  getOrders() {
    return this.http.post('http://127.0.0.1:8000/api/orders/all', {
      token: localStorage.getItem('token')
    }).subscribe(data => {
      this.data = data;
    },
      error => {
        console.log(error);
      });
  }

}
