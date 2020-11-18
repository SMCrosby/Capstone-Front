import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';
import { Request } from './request.class';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests: Request[];

  constructor(
    private requestsvc: RequestService
  ) { }

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