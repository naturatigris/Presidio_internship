import { Component } from '@angular/core';
import products from '../../data/product.json';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}


@Component({
  selector: 'app-ecommerce',
    standalone: true, // ✅ add this

  imports: [CommonModule],
  templateUrl: './ecommerce.html',
  styleUrls: ['./ecommerce.css']

})
export class Ecommerce {
  products: Product[] = products;
  cartCount = 0;

  addToCart() {
    this.cartCount++;
  }

}
