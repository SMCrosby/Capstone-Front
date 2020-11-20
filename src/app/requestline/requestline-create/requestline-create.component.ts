import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from 'src/app/request/request.class';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

requestline: Requestline;
rId: 0;
products: Product[];

  constructor(
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService
  ) { }

  save(): void {
    this.requestline.requestId = +this.rId;
    this.requestline.productId = +this.requestline.productId;
    console.debug(this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => {
        console.debug("Create Requestline:", res)
        this.router.navigateByUrl(`/requests/lines/${this.rId}`);
      },
      err => {
        console.error("Error Creating Requestline:", err);
      });
  }


  ngOnInit(): void {
    this.rId = this.route.snapshot.params.rid;
    this.productsvc.list().subscribe(
      res => {
        console.debug("Requestline Create:", res);
        this.products = res as Product[];
      }
    )
  }

}
