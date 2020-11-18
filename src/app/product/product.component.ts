import { Component, OnInit } from '@angular/core';
import { Product } from './product.class';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(
    private productsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res => {
        console.debug("Product:",res)
        this.products=res as Product[]
      },
      err => {
        console.error(err);
      }
    );
  }

}
