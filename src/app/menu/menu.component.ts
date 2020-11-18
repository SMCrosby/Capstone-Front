import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    {display: "Home", route: "/home"},
    {display: "Users", route: "/users/list"},
    {display: "Vendors", route: "/vendors"},
    {display: "Products", route: "/products"},
    {display: "Requests", route: "/requests"},
    {display: "Review", route: "/requests/review"},
    {display: "About", route: "/about"},
    {display: "Login", route: "/login"}
    
  ];
  /*

  export interface type{
    id:number;
    text:string;
}

public mySentences:type[] = [
    {id: 1, text: 'Sentence 1'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentenc4 '},
];
  "Home", "Users", "Vendors", "Products", "Requests", "Review", "About", "Login"
   menu: string [] = [
    "Display", "route"
  ];
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
