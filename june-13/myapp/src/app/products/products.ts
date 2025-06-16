import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/productservice.service';
import { ProductModel } from '../models/product';
import { Product } from "../product/product";
import { CartItem } from '../models/cartitem';
import { FormsModule } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, Subject, switchMap, tap } from 'rxjs';



@Component({
  selector: 'app-products',
  imports: [Product,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products:ProductModel[]|undefined=undefined;
  cartItems:CartItem[] =[];
  cartCount:number =0;
  searchString:string="";
    loading:boolean = false;

  searchSubject = new Subject<string>();
  constructor(private productService:ProductService){

  }
  handleSearchProducts(){
    // console.log(this.searchString)
    this.searchSubject.next(this.searchString);
  }


  handleAddToCart(event:Number)
  {
    console.log("Handling add to cart - "+event)
    let flag = false;
    for(let i=0;i<this.cartItems.length;i++)
    {
      if(this.cartItems[i].Id==event)
      {
         this.cartItems[i].Count++;
         flag=true;
      }
    }
    if(!flag)
      this.cartItems.push(new CartItem(event,1));
    this.cartCount++;
  }
  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(
    //   {
    //     next:(data:any)=>{
    //      this.products = data.products as ProductModel[];
    //     },
    //     error:(err)=>{},
    //     complete:()=>{}
    //   }
    // )
    this.searchSubject.pipe(
      debounceTime(5000),
      distinctUntilChanged(),
      tap(()=>this.loading=true),
      switchMap(query=>this.productService.getProductSearchResult(query)),
       tap(()=>this.loading=false)).subscribe({
        next:(data:any)=>{this.products = data.products as ProductModel[];}
      });

  }

}
