import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';
import { cities } from "src/app/Model/cities";
@Injectable({
  providedIn: 'root'
})
export class CitiesService {
 url  = 'https://localhost:44361/api/cieies';
  constructor(private http:HttpClient) { }

  GetALL():Observable<cities[]>
    {
      return this.http.get<cities[]>(`${this.url}/getall`)

    }
}