import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.class';


const baseurl: string = "http://localhost:53016/api/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product: Product;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }

  get(id): Observable<Product> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }

  create(product: Product): Observable<Product> {
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }

  change(product: Product): Observable<any> {
    return this.http.post(`${baseurl}/${product.id}` ,Product) as Observable<any>
  }

  remove(product: Product): Observable<Product> {
    return this.http.delete(`${baseurl}/${product.id}`) as Observable<Product>;
  }

}