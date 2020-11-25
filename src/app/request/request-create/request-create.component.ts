import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }
  
  create(): void {
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Create Request:", res);
        this.router.navigateByUrl("/requests")
        this.request = res;
       // this.review();
      },
      err => {
        console.error("Error Creating Product:", err);
      });
  }

  // review(): void {
  //   this.requestsvc.review(this.request.id, this.request).subscribe(
  //     res => {
  //       console.debug("Review Request Status:", res)
  //       this.router.navigateByUrl("/requests")
  //     },
  //     err => {
  //       console.error("Error Review Request Status:", err);
  //     });
  // }
  
  

  ngOnInit(): void {
    this.syssvc.checkLogin()
    //this.request.user.id = this.syssvc.loggedInUser.id;
    this.request.userId = this.syssvc.loggedInUser.id;
  }

}

