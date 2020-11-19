import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        console.debug("Product:", res)
        this.product = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
