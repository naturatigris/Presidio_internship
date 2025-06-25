import { Component, EventEmitter, inject, Input, Output ,OnInit} from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ProductModel } from '../models/productmodel';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute ,RouterLink} from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product  {
@Input() product:ProductModel|null = new ProductModel();
@Output() addToCart:EventEmitter<Number> = new EventEmitter<Number>();
private productService = inject(ProductService);
@Input() username: string | null = null;


handleBuyClick(pid:Number|undefined){
  if(pid)
  {
      this.addToCart.emit(pid);
      
  }
}
constructor(){
}

}