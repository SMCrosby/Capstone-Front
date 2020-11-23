import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Request Details:", res)
        this.request = res;
      },
      err => {
        console.error("Error on Request Details:",err);
      });
  }

}
