import { Component, AfterViewInit, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { ProductModel } from '../models/productmodel';
import { Product } from "../product/product";
import { CartItem } from '../models/cartItem';
import { FormsModule } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, Subject, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@Component({
  selector: 'app-products',
  imports: [Product,FormsModule,CommonModule,InfiniteScrollModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit,AfterViewInit{
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  products:ProductModel[]=[];
  cartItems:CartItem[] =[];
  cartCount:number =0;
  searchString:string="";
  searchSubject = new Subject<string>();
  loading:boolean = false;
  limit=10;
  skip=0;
  total =0;
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
  this.searchSubject.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    tap(() => {
      this.loading = true;
      this.skip = 0; // Reset pagination for new search
    }),
    switchMap(query => this.productService.getProductSearchResult(query, this.limit, this.skip)),
    tap(() => this.loading = false)
  ).subscribe({
    next: (data: any) => {
      this.products.splice(0, this.products.length, ...data.products); // No reassignment
      this.total = data.total;

      // Optional: Scroll to top on new search
      setTimeout(() => {
        if (this.scrollContainer) {
          this.scrollContainer.nativeElement.scrollTop = 0;
        }
      }, 0);
    }
  });

}
ngAfterViewInit(): void {
  setTimeout(() => {
    this.loadMore(); // Only run after view is fully initialized
  });
}

  
onScroll(event: any): void {
  const el = this.scrollContainer.nativeElement;
  const threshold = 100;
  const position = el.scrollTop + el.clientHeight;
  const height = el.scrollHeight;

  if (position >= height - threshold && !this.loading && this.products.length < this.total) {
    this.loadMore();
  }
}
loadMore() {
  if (this.loading) return;

  this.loading = true;
  const container = this.scrollContainer.nativeElement;
  const previousHeight = container.scrollHeight;

  this.skip += this.limit;
  this.productService.getProductSearchResult(this.searchString, this.limit, this.skip)
    .subscribe({
      next: (data: any) => {
        this.products.push(...data.products);
        this.loading = false;

        setTimeout(() => {
          const newHeight = container.scrollHeight;
          container.scrollTop += newHeight - previousHeight;
        }, 0);
      }
    });
}
  trackByCartItemId(index: number, item: CartItem) {
  return item.Id;
}

trackByProductId(index: number, item: ProductModel) {
  return item.id;
}

}