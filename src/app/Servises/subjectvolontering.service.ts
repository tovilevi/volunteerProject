import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { sv } from "src/app/Model/s_v";
import { constrain } from "src/app/Model/constrain";
import { shift } from '../Model/shift';
import { typeOfVolunteer } from '../Model/typeOfVolunteer';
import { linkUserToTypeVolunteer } from '../Model/linkUserToTypeVolunteer';
import { linkUserToShift } from '../Model/linkUserToShift';

@Injectable({
  providedIn: 'root'
})
export class SubjectVolonteringService {

    url  = 'https://localhost:44325/api/';
  constructor(private http:HttpClient) { }
  GetALLShift():Observable<shift[]>
  {
    return this.http.get<shift[]>(this.url+"volunteerTime")

  }
  GetALLTypeOfVolunteer():Observable<typeOfVolunteer[]>
  {
    return this.http.get<typeOfVolunteer[]>(this.url+"typeOfVolunteering")

  }
  insert(ncv:linkUserToShift)
  {
    
    return this.http.post(`${this.url}volunteerTime`,ncv)
  }
  insertTypeOfVolunteer(ncv:linkUserToTypeVolunteer)
  {
    
    return this.http.post(`${this.url}linkUserToTypeOfVolunteering`,ncv)
  }


    bring(id:number):Observable<constrain[]>
  {
     console.log("זב" +id)
    return this.http.get<constrain[]>(`${this.url}/getallconstrain/`+id)
   }
     GetALL():Observable<sv[]>
    {
     
      return this.http.get<sv[]>(`${this.url}/getall`)
 
    }
    getalldys():Observable<constrain[]>
  {
    
    return this.http.get<constrain[]>(`${this.url}/getalldys`)
   }
   getallH():Observable<constrain[]>
   {
     
     return this.http.get<constrain[]>(`${this.url}/getallH`)
    }

}

