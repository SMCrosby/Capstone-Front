import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor.class';


const baseurl: string = "http://localhost:53016/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendor: Vendor;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }

  get(id): Observable<Vendor> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
  }

  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${baseurl}/${vendor.id}` ,vendor) as Observable<any>
  }

  remove(vendor: Vendor): Observable<Vendor> {
    return this.http.delete(`${baseurl}/${vendor.id}`) as Observable<Vendor>;
  }

}