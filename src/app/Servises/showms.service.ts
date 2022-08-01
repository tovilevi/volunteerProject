import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { realvolonteing } from "src/app/Model/realvolontering";
import { type } from '../Model/type';
import { inlayTable } from '../Model/inlayTable';

@Injectable({
  providedIn: 'root'
})
export class ShowmsService {

  url = 'https://localhost:44325/api/';
  constructor(private http: HttpClient) { }

  GetALL(): Observable<inlayTable[]> {
    return this.http.get<inlayTable[]>(this.url + "values")

  }
  getUser(id: Number): Observable<inlayTable[]> {
    console.log(id)
    return this.http.get<inlayTable[]>(this.url + "/inlayTable/" + id)
  }
  deleteShift(id:Number){
    return this.http.delete(this.url + "inlayTable/" + id)
  }
 

}
