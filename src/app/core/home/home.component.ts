import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = null;

  constructor(
  private syssvc: SystemService
  ) { }

  //accesses loggin in user
  ngOnInit(): void {
    this.user = this.syssvc.loggedInUser;
  }

}
