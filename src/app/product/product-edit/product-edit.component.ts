import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[] = [];

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
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
        console.error("Product:",err);
      });

      this.vendorsvc.list().subscribe(
        res => {
          console.log(res)
          this.vendors = res as Vendor[];
        },
        err => {
          console.error("Error Loading Products/Vendors:", err);
        });
  }

}

