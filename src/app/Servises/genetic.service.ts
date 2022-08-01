import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneticService {
  url  = 'https://localhost:44325/api/inlayTable';
  constructor(private http:HttpClient) { }
  get():Observable<string>
  {
    
    
       return this.http.get<string>(this.url)

  }
  // get():Observable<number>
  // {
  //   return this.http.get<number>(this.url+'/getscheduling')
  // }
  
}
