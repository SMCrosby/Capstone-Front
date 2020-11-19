import { Component, OnInit } from '@angular/core';

import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, ActivationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: User;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  create(): void {
    console.log(this.user);
    this.usersvc.create(this.user).subscribe(
      res => {
        console.debug("User Create:", res);
        this.router.navigateByUrl("/users/list")
      },
      err => {
        console.error("Error Creating Product", err);
      });
  }

  ngOnInit(): void {
  }

}
/*
create(): void {
  this.product.vendorId= +this.product.vendorId;
  this.productsvc.create(this.product).subscribe(
    res => {console.debug("Product Create:",res); 
    this.router.navigateByUrl("/products")
  },
  err => {
    console.error("Error Creating Product:",err);
  });
}
*/