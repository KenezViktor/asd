import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './backend.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegComponent } from './reg/reg.component';
import { Location } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    RegComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    BackendService,
    Location
  ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
