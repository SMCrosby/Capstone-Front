import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';


const baseurl: string = "http://localhost:53016/api";


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;
  
  constructor(
    private router: Router
    ) { }

    isAdmin(): boolean {
      return (this.loggedInUser == null) ? false: this.loggedInUser.isAdmin;
    }

  checkLogin(): void {
    //if user is not logged in, send to the login page
    if (this.loggedInUser == null) {
      console.log('User is not logged in... redirecting to login.');
      this.router.navigateByUrl('/users/login');
    }
  }

  
}
