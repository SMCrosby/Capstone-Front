import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requestline } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  
  request: Request;
  requestlines: Requestline[];

  constructor(
    private requestlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
        //this.requestlines = this.request.requestline as Requestline[]; 
      },
      err => {
        console.error("Error Refreshing Page:", err);
      });
  }

  getByReq(): void {
    let requestId = +this.route.snapshot.params.id;
    this.requestlinesvc.getByReq(requestId).subscribe(
      res => { 
        console.debug(res); 
        this.requestlines = res as Requestline[];
      },
      err => {
        console.error("Error Getting RequestLines:", err);
      });

  }
  
  

  ngOnInit(): void {
    this.refresh();
    this.getByReq();
  }

}
