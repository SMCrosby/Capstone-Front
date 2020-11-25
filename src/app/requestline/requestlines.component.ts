import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request/request.class';
import { RequestService } from '../request/request.service';
import { Requestline } from './requestline.class';
import { RequestlineService } from './requestline.service';


@Component({
  selector: 'app-requestlines',
  templateUrl: './requestlines.component.html',
  styleUrls: ['./requestlines.component.css']
})
export class RequestlinesComponent implements OnInit {

request: Request;
requestlines: Requestline;
subtotal: number = 0;

  constructor(
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  review(): void {
    this.requestsvc.review(this.request.id, this.request).subscribe(
      res => {
        console.debug("Review Request Status:", res)
        this.refresh();
      },
      err => {
        console.error("Error Review Request Status:", err);
      });
  }

  delete(id: number): void {
    console.debug(`Deleting line id: ${id}`);
    this.requestlinesvc.removeById(id).subscribe(
      res => {
        this.refresh();
      },
      err => { 
        console.error(err);
      });
  }

  createUserName(request: Request): void {
    request.userName = `${request.user.lastname}, ${request.user.firstname}`
  }

  refresh(): void {
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => { 
        this.createUserName(res); 
        console.debug(res); 
        this.request = res;

      },
      err => {
        console.error("Error Refreshing Page:", err);
      });
     
  }
  
  

  ngOnInit(): void {
    this.refresh();
    
  }

}

