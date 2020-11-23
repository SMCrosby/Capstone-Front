import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = this.syssvc.loggedInUser;
  admin = false;

  constructor(
  private syssvc: SystemService
  ) { }

  //accesses loggin in user
  ngOnInit(): void {
    this.user = this.syssvc.loggedInUser;
    this.admin = this.syssvc.isAdmin();
  }

}

// let userId = this.syssvc.loggedInUser.id;
//     this.requestsvc.listInReview(userId).subscribe(
//       res => {
//         console.debug(res)
//         this.requests = res as Request[];
//       },
//       err => {
//         console.error("Error getting Requests in Review:", err);
//       });
//   }
