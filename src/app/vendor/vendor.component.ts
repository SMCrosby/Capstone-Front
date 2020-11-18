import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor.class';
import { VendorService } from './vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[];
  
  constructor(
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => {
        console.debug(res)
        this.vendors = res as Vendor[];
      },
      err => {
        console.error(err);}
    );
  }

}
