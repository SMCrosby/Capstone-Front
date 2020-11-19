import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendor: Vendor

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.product);
    this.productsvc.change(this.product).subscribe(
      res => {
        console.debug("Product Change:", res);
        this.router.navigateByUrl("/products")
      },
      err => {
        console.error("Error Updating Product:", err);
      });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.debug("Product:", res)
        this.product = res
      },
      err => {
        console.error("Product:",err)
      }
    )
  }

}