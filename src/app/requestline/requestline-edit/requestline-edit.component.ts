import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: Requestline;
  products: Product[];

  constructor(
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.requestline);
    this.requestlinesvc.change(this.requestline).subscribe(
      res => {
        console.debug("Requestline Change:", res);
        this.router.navigateByUrl(`/requestlines/${this.requestline.requestId}`)
      },
      err => {
        console.error("Error Updating Requestline:", err);
      });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestlinesvc.get(id).subscribe(
      res => {
        console.debug("Requestlines:", res)
        this.requestline = res;
      },
      err => {
        console.error("Requestline-Edit:", err);
      });

      this.productsvc.list().subscribe(
        res => {
          console.log(res)
          this.products = res as Product[];
        },
        err => {
          console.error("Error Loading Requestlines/Products:", err);
        });
  }

}

