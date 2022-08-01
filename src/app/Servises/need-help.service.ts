import { need_help } from '../Model/needHelp';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { realvolonteing } from "src/app/Model/realvolontering";
import { needHelp_Constraint_volunteer } from "src/app/Model/needHelp_Constraint_volunteer";
import { user } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class NeedHelpService {

  url  = 'https://localhost:44325/api';
  constructor(private http:HttpClient) { }
  update(id:Number, newneedhelp:user):Observable<number>
    {
      return this.http.put<number>(this.url+"/user/"+ id,newneedhelp)
    }
    insertneed_help(newneedhelp:need_help):Observable<number>
    {
      return this.http.post<number>(`${this.url}/SignUp`,newneedhelp)
    }
      insertncv(ncv:needHelp_Constraint_volunteer):Observable<number>
    {
      
      return this.http.post<number>(`${this.url}/add_ncv`,ncv)
    }
    login(newneedhelp:need_help):Observable<number>
    {
      return this.http.post<number>(this.url+"/login",newneedhelp)
    }
    get():Observable<need_help[]>
    {
      return this.http.get<need_help[]>(this.url+"/getall")
    }
   delete(id:string):Observable<number>
   {
    console.log(id)
  
    return this.http.get<number>(this.url+"/delete/"+id)
    }
     s(id:string):Observable<realvolonteing[]>
    {
      console.log(id)
      return this.http.get<realvolonteing[]>(`${this.url}/getscheduling/` +id)

    }
    getneedcv():Observable<needHelp_Constraint_volunteer[]>
    {
      return this.http.get<needHelp_Constraint_volunteer[]>(this.url+"/getallNCV")
    }
    deletencv(ncv:needHelp_Constraint_volunteer):Observable<number>{
      console.log(ncv)
      return this.http.post<number>(`${this.url}/deletencv`,ncv)
    }
  }