import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: string[] = [
    "Home", "Users", "Vendors", "Products", "Requests", "Review", "About", "Login"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
