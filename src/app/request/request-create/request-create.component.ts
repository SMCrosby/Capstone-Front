import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  create(): void {
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Create Request:", res);
        this.router.navigateByUrl("/requests")
      },
      err => {
        console.error("Error Creating Product:", err);
      });
  }

  ngOnInit(): void {
    
  }

}
