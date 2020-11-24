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
  rejectvar: Boolean = false;
  //rejectionReason: string;
 // requestlines: Requestline[];

  constructor(
    private requestlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

approve(): void {
  this.requestsvc.approve(this.request.id, this.request).subscribe(
    res => {
      console.debug("Approve Request:", res);
      this.router.navigateByUrl("/requests/review")
    },
    err => {
      console.error("Error Approving Request:", err);
    });
}

rejectConfirm(): void {
  this.rejectvar=true;
}

reject(): void {
  this.requestsvc.reject(this.request.id, this.request, this.request.rejectionReason).subscribe(
    res => {
      console.debug("Reject Request:", res);
      this.router.navigateByUrl("/requests/review")
    },
    err => {
      console.error("Error Rejecting Request:", err);
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
        //this.requestlines = this.request.requestline as Requestline[]; 
      },
      err => {
        console.error("Error Refreshing Page:", err);
      });
  }
  

  ngOnInit(): void {
    this.refresh();
  }

}
