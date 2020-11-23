import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  requests: Request[];
  user: User = null;
  admin = false;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    // this.user = this.syssvc.loggedInUser;
    // this.admin = this.syssvc.isAdmin();
    //this.syssvc.checkLogin();
    let userId = 3//this.syssvc.loggedInUser.id;
    this.requestsvc.InReview(userId).subscribe(
      res => {
        console.debug(res)
        this.requests = res as Request[];
      },
      err => {
        console.error("Error getting Requests in Review:", err);
      });
  }

}

// ngOnInit(): void {
//   this.requestsvc.list().subscribe(
//     res => {
//       console.debug(res)
//       this.requests = res as Request[];
//     },
//     err => {
//       console.error(err);
//     });

