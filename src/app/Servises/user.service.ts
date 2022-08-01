import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { user } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url  = 'https://localhost:44325/api/';
  constructor(private http:HttpClient) { }
  // insertMCv(user:user):Observable<number>
  //   {
  //     console.log(user);
  //     console.log("newuser");
  //     return this.http.post<number>(`${this.url}/user`,user)
  //   }
  insertMCv(user:user):Observable<number>
    {
      console.log(user);
      console.log("newuser");
      return this.http.post<number>(`${this.url}/user`,user)
    }
    getUserById(id:number):Observable<user>{
      return this.http.get<user>(this.url+"values/"+id)
    }
}
