import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

request: Request;

  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.log(this.request);
    this.requestsvc.change(this.request).subscribe(
      res => {
        console.debug("Request Change:", res);
        this.router.navigateByUrl("/requests")
      },
      err => {
        console.error("Error Updating Request:", err);
      });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        console.debug("Requests:", res)
        this.request = res;
      },
      err => {
        console.error("Requests-Edit:", err);
      });
  }

}