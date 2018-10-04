import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  public username: string;
  public password: string;
  public email: string;
  public data: any;
  public token: any;

  constructor(private http: HttpClient, private router: Router) { }

  getData() {
    return this.http.get('http://localhost:8000/api/product/all')
    .subscribe(data => {
      console.log(data);
    });
  }

  login() {
    return this.http.post<LoginResponse>('http://localhost:8000/api/users/login', {
      username: this.username,
      password: this.password
    }).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', this.username)
      this.router.navigate(['/search']);
    });
  }

  registration() {
    return this.http.post('http://localhost:8000/api/users/reg', {
      username: this.username,
      password: this.password,
      email: this.email
    })
    .subscribe(data => {
      this.router.navigate(['/search']);
    });
  }

  search(param: string) {
    return this.http.post('http://localhost:8000/api/product/one', {
      name: param
    })
      .subscribe( data => {
        console.log(JSON.stringify(data));
      },
        error => {
          console.log(error);
        });
  }

  logout() {
    return this.http.post('http://localhost:8000/api/users/logout', {
      token: this.token
    })
      .subscribe( data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
