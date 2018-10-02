import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public data: any[] = [];

  constructor() { }

  addItem(data) {
    this.data.push(data);
  }

  removeItem(data) {
    console.log(data);
    this.data[data] = null;
    console.log(this.data);
    console.log(this.data[data]);
  }
}
