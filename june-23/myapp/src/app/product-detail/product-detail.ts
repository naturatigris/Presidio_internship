import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Service/product.service';
import { ProductDetailModel } from '../models/productdetailmodel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css'],
  imports:[CommonModule]
})
export class ProductDetailComponent implements OnInit {
  product!: ProductDetailModel;
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProduct(id).subscribe({
        next: (data: any) => {
          this.product = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load product.';
          this.loading = false;
        }
      });
    } else {
      this.error = 'Invalid product ID.';
      this.loading = false;
    }
  }
}
