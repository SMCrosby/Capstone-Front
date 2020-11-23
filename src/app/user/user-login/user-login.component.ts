import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  message = '';
  username = '';
  password = '';
  user: User = null;

  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // default username/pasword so we don't have to login every time we test
    this.username = "scrosby";
    this.password = "0000";
    this.syssvc.loggedInUser = null;  //clear out logged in in user
  }

  login() {
    console.log("in login method...");
    this.usersvc.login(this.username, this.password).subscribe(
      res => {
        if (res != null) {
        console.log("login:", res);
        this.user = res as User;
        this.syssvc.loggedInUser = this.user;
        this.router.navigateByUrl("/home");
        }
        else { this.message = "Invalid Login"}
      },
      err => {console.error("Error:", err);
      this.message = "Problems Logging in";
    });
  }


}
