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

  InReview(userId): Observable<Request[]> {
    return this.http.get(`${baseurl}/Review/${userId}`) as Observable<Request[]>;
  }
  //[HttpGet("InReview/{userId}")] 

  get(id): Observable<Request> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }


  create(request: Request): Observable<Request> {
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
  }

  approve(id: number, request: Request): Observable<any> {
    return this.http.put(`${baseurl}/Approve/${id}`, request) as Observable<any>;
  }

  reject(id: number, request: Request, rejectionReason: string): Observable<any> {
    return this.http.put(`${baseurl}/Reject/${id}`, request) as Observable<any>;
  }

  review(id: number, request: Request): Observable<any> {
    return this.http.put(`${baseurl}/Review/${id}`, request) as Observable<any>;
  }
  //[HttpPut("Review/{id}")]     


  remove(request: Request): Observable<Request> {
    return this.http.delete(`${baseurl}/${request.id}`) as Observable<Request>;
  }

}
