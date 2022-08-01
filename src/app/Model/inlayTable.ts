import { NgSwitchDefault } from "@angular/common"
import { shift } from "./shift"
import { typeOfVolunteer } from "./typeOfVolunteer"
import { user } from "./user"

export class inlayTable{
  
    IdInlayTable:number=0
    volunteerCode:user=new user()
    VolunteeredCode:user=new user()
    volunteerTimeCode:shift=new shift()
    TypeOfVolunteeringCode:typeOfVolunteer=new typeOfVolunteer()
    dateOfInlay:Date=new Date()

}