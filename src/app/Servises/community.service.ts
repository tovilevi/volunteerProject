import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';
import { community } from '../Model/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  url  = 'https://localhost:44325/api';
  constructor(private http:HttpClient) { }
  getCommunity(name:string):Observable<community>
    {
      return this.http.get<community>(`${this.url}/community/`+name)
    }
    GetALL():Observable<community[]>
    {
      return this.http.get<community[]>(`${this.url}/community`)

    }
}
