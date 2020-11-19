import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = []
  pageTitle: string = "Product Create";
 

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  create(): void {
    this.product.vendorId= +this.product.vendorId;
    this.productsvc.create(this.product).subscribe(
      res => {console.debug("Product Create:",res); 
      this.router.navigateByUrl("/products")
    },
    err => {
      console.error("Error Creating Product:",err);
    });
  }

  ngOnInit(): void {
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