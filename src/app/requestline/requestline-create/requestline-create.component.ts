import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

requestline: Requestline = new Requestline();
rId: 0;
products: Product[];

product: Product = null;
request: Request = null;

  constructor(
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private requestsvc: RequestService
  ) { }

    
    create(): void {
    this.requestline.productId = +this.requestline.productId;
    console.debug(this.requestline);
    this.requestlinesvc.create(this.requestline).subscribe(
      res => {
        console.debug("Create RequestLine:", res);
        this.requestline = res;
        this.router.navigateByUrl(`/requestlines/${this.rId}`)
      },
      err => {
        console.error("Error Creating Requestline:", err);
      });
   }


   getProductInstance(): void {
     
    this.requestsvc.get(this.rId).subscribe(
      res => {
        console.debug("Requestline Create/Fetch Request:", res)
        this.requestline.request = res;
      },
      err => {
        console.error("Requestline Create/Fetch Request:", err);
      });
   }
  
  

  ngOnInit(): void {
    this.rId = this.route.snapshot.params.id;

    this.requestline.requestId = +this.rId;
  

    this.productsvc.list().subscribe(
      res => {
        console.debug("Requestline Create/Fetch Products:", res);
        this.products = res as Product[];
      },
      err => {
        console.error("Requestline create/Fetch Products:", err);
      });

      // this.requestsvc.get(this.rId).subscribe(
      //   res => {
      //     console.debug("Requestline Create/Fetch Request:", res)
      //     this.requestline.request = res;
      //   },
      //   err => {
      //     console.error("Requestline Create/Fetch Request:", err);
      //   });
  }

}
