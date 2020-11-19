import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

vendor: Vendor;

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.vendorsvc.get(id).subscribe(
      res => {
        console.debug("Vendors:", res)
        this.vendor = res;
      },
      err => {
        console.error(err)
      });
  }

}


