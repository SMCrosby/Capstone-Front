import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  tableStyle: string = "table table-sm";
  sortCriteria: string = "";
  ascSequence: boolean = true;

sortBy(column: string): void {
  if(column == this.sortCriteria) {
    this.ascSequence = !this.ascSequence;
    return;
  }
  this.sortCriteria = column;
  this.ascSequence = true;
}

  constructor(
  private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res => {
        console.log(res)
        this.users = res as User[];
      },
      err => {
        console.error(err);}
    );
  }

}
