import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { Request } from './request.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests: Request[];

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute
  ) { }
  
  // Requests(): Request[] {
  //   let id = +this.route.snapshot.params.id;
  //   this.requestsvc.list().subscribe(
  //     res => {
  //       console.debug(res)
  //       this.requests = res as Request[];
          
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      res => {
        console.debug(res)
        this.requests = res as Request[];
      },
      err => {
        console.error(err);
      });
  }

}