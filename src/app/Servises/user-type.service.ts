import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type } from '../Model/type';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  url  = 'https://localhost:44325/api';
  constructor(private http:HttpClient) { }
  getUserType(name:string):Observable<type>
    {
      return this.http.get<type>(`${this.url}/userType/`+name)
    }
    GetALL():Observable<type[]>
    {
      return this.http.get<type[]>(`${this.url}/userType`)

    }
 
}
