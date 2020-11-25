import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class';
import { Requestline } from './requestline.class';


const baseurl: string = "http://localhost:53016/api/requestLines";

@Injectable({
  providedIn: 'root'
})

export class RequestlineService {

  constructor(
    private http: HttpClient
  ) { }

  
  requestTotal(id: number, request: Request): Observable<Request> {
    return this.http.put(`${baseurl}/RequestTotal/${id}`, request) as Observable<Request>;
  }


  list(): Observable<Requestline[]> {
    return this.http.get(`${baseurl}`) as Observable<Requestline[]>; 
  }

  getByReq(requestId): Observable<Requestline[]> {
    return this.http.get(`${baseurl}/Request/${requestId}`) as Observable<Requestline[]>;
  }
  //[HttpGet("RequestLines/{requestId}")]   

  get(id): Observable<Requestline> {
    return this.http.get(`${baseurl}/${id}`) as Observable<Requestline>;
  }

  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${baseurl}`, requestline) as Observable<Requestline>;
  }

  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${baseurl}/${requestline.id}`, requestline) as Observable<any>;
  }

  remove(requestline: Requestline): Observable<Requestline> {
    return this.http.delete(`${baseurl}/${requestline.id}`) as Observable<Requestline>;
  }

  removeById(id: number): Observable<Request> {
    return this.http.delete(`${baseurl}/${id}`) as Observable<Request>;
  }

}
