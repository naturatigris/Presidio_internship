import { Component } from '@angular/core';
import customerData from '../../data/customer.json';
@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer {
    customer = customerData;

    likes = 0;
  dislikes = 0;

  like() {
    this.likes++;
  }

  dislike() {
    this.dislikes++;
  }


}
