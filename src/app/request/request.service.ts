import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';


const baseurl: string = "http://localhost:53016/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

request: Request;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${baseurl}`) as Observable<Request[]>; 
  }

  get(id): Observable<Request> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
  }

  remove(request: Request): Observable<Request> {
    return this.http.delete(`${baseurl}/${request.id}`) as Observable<Request>;
  }

}
