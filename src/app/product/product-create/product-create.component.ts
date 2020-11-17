import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];
  pageTitle: string = "Product Create";
  
  /*
  constructor(
    private productsvc: ProductService
  ) { }

  save(): void {
    this.product.vendorId= +this.product.vendorId;
    this.productsvc.create(this.product).subscribe(
      res => {console.debug(res); this.router.Navigatebyurl}
    )
  }
  */

  ngOnInit(): void {
  }

}
