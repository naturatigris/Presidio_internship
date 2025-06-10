import { Component } from '@angular/core';
import { First } from "./first/first";
import { Customer } from './customer/customer';
import { Ecommerce } from './ecommerce/ecommerce';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Customer,Ecommerce]
})
export class App {
  protected title = 'myApp';
}
