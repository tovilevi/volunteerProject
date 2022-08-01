import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { mitnadev } from "src/app/Model/mitnadev";
import { realvolonteing } from "src/app/Model/realvolontering";
import { user } from "src/app/Model/user"
import { volunteering_Constraint_volunteer } from 'src/app/Model/volunteering_Constraint_volunteer';
@Injectable({
  providedIn: 'root'
})
export class MitnadevService {

 url  = 'https://localhost:44325/api/';
  constructor(private http:HttpClient) { }
    login(newmitnadev:mitnadev):Observable<number>
    { 
      console.log(newmitnadev)
      return this.http.post<number>(this.url,newmitnadev.id)
    }
  delete(id:string):Observable<number>
   {
    console.log(id)
      return this.http.get<number>(this.url+"/delete/"+id)
    }
    getUser(id:string):Observable<user>
   {
    console.log(id)
      return this.http.get<user>(this.url+"/user/"+id)
    }
    getUserById(id:number):Observable<user>
   {
    console.log(id)
      return this.http.get<user>(this.url+"/values/"+id)
    }
    insertmitnadev(newmitnadev:mitnadev):Observable<number>
    {
      console.log(newmitnadev)
      return this.http.post<number>(this.url+"/SignUp",newmitnadev)
    }

    get():Observable<mitnadev[]>
    {
      return this.http.get<mitnadev[]>(this.url+'/getall')
    }
   s(id:string):Observable<realvolonteing[]>
    {
       
    
      return this.http.get<realvolonteing[]>(`${this.url}/getscheduling/` +id)
    }
    // si():Observable<realvolonteing[]>
    // {
    //   return this.http.get<realvolonteing[]>(`${this.url}`)
    // }
    si():Observable<number>
    {
      return this.http.get<number>(`${this.url}+inlayTable`)
    }

     update(mi:mitnadev):Observable<number>
    {
      console.log(mi)
      return this.http.post<number>(this.url+"/update",mi)
    }
    insertMCv(newmitnadev:volunteering_Constraint_volunteer):Observable<number>
    {
      console.log(newmitnadev.Id_volunteer);
      console.log("newmitnadev");
      return this.http.post<number>(`${this.url}/add_mcv`,newmitnadev)
    }
    UpdateMCv(newmitnadev:volunteering_Constraint_volunteer):Observable<number>
    {
      return this.http.post<number>(`${this.url}/update_mcv`,newmitnadev)
    } getmcv():Observable<volunteering_Constraint_volunteer[]>
    {
      return this.http.get<volunteering_Constraint_volunteer[]>(this.url+'/getmcv')
    }
    deleteMCv(newmitnadev:volunteering_Constraint_volunteer):Observable<number>
    {
      return this.http.post<number>(`${this.url}/deleteMCv`,newmitnadev)
    }
    }

