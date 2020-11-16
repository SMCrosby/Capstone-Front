import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input() menu: string;

  constructor() { }

  ngOnInit(): void {
  }

}
