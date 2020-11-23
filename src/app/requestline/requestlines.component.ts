import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request/request.service';
import { Requestline } from './requestline.class';
import { RequestlineService } from './requestline.service';


@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['./requestlines.component.css']
})
export class RequestlinesComponent implements OnInit {

requestlines: Requestline[];

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.requestlinesvc.list().subscribe(
      res => {
        console.log(res)
        this.requestlines = res;
      },
      err => {
        console.error(err);
      });
  }

}


