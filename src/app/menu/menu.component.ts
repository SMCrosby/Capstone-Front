import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: String[] = [
    "Home", "Users", "Vendors", "Products", "Requests", "Review", "About", "Login"
  ];
  /*
  <nav>
    <a routerLink="/home">Home</a> |
    <a routerLink="/about">About</a> |
    <a routerLink="/help">Help</a> |
    <a routerLink="/work">Work</a> |
    <a routerLink="/education">Education</a> |
    <a routerLink="/xxx">Invalid</a>
</nav>
*/

  constructor() { }

  ngOnInit(): void {
  }

}
