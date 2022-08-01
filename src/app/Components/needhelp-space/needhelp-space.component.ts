import { Component, OnInit } from '@angular/core';
import { NeedHelpService } from "src/app/Servises/need-help.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MitnadevService } from 'src/app/Servises/mitnadev.service';
//import { realvolonteing } from 'src/app/Model/realvolontering';
import { mitnadev } from 'src/app/Model/mitnadev';
import { need_help } from 'src/app/Model/needHelp';
import { ShowmsService } from 'src/app/Servises/showms.service';
import { inlayTable } from 'src/app/Model/inlayTable';
import { user } from 'src/app/Model/user';
@Component({
  selector: 'app-needhelp-space',
  templateUrl: './needhelp-space.component.html',
  styleUrls: ['./needhelp-space.component.css']
})
export class NeedhelpSpaceComponent implements OnInit {
  id: any = sessionStorage.getItem('id')
  idInput: string | null = ""
  listRealvolonteing: inlayTable[] = [];
  b: boolean = false

  a: boolean = false
  us: user = new user()
  user: user = new user()




  constructor(private mitnadevService: MitnadevService, private showShifts: ShowmsService, private aroute: ActivatedRoute, private needHelpService: NeedHelpService, private router: Router, private MitnadevService: MitnadevService) { }

  ngOnInit(): void {
    this.idInput = this.aroute.snapshot.paramMap.get('id')
    console.log(this.idInput);
    if (this.idInput != null)
      this.mitnadevService.getUserById(parseInt(this.idInput)).subscribe(ans => {
        this.us = ans
      })
    if (this.idInput != null)
      this.showShifts.getUser(parseInt(this.idInput)).subscribe(ans => {
        this.listRealvolonteing = ans
      })
      for (let index = 0; index < this.listRealvolonteing.length; index++) {
        let key = this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering
        switch (key) {
          case "Childcare":
            this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "שמירה על ילדים"
            break;
          case "Housework":
            this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "עבודות בית"
            break;
             case "VolunteeringInHospitals":
            this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "התנדבות בבית חולים"
            break; 
            case "VolunteeringWithSeniors":
            this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "התנדבות עם מבוגרים"
            break;
             case "Cooking":
            this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "בישול"
            break;
            case "SpecialChildren\r\n":
            this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = " שמירה על ילדים מיוחדים"
            break;
  
          default:
            break;
        }
        let key2 = this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime
        switch (key2) {
          case "Morning   ":
            this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime="בוקר"
            break;
            case "Noon      ":
            this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime="צהריים"
            break;
            case "Evening   ":
            this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime="ערב"
            break;      
          default:
            break;
        }}
  
  }
  up() {
    this.router.navigate([`/app-update-ncv/${this.idInput}`])

  }
  upd() {
    this.router.navigate([`/app-update-n/${this.idInput}`])

  }
  ghow() {
    //  this.router.navigate(['/app-shown'])
    if (this.idInput != null)
      this.showShifts.getUser(parseInt(this.idInput)).subscribe(ans => {
        this.listRealvolonteing = ans
        for (let index = 0; index < this.listRealvolonteing.length; index++) {
          let key = this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering
          switch (key) {
            case "Childcare":
              this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "שמירה על ילדים"
              break;
            case "Housework":
              this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "עבודות בית"
              break;
               case "VolunteeringInHospitals":
              this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "התנדבות בבית חולים"
              break; 
              case "VolunteeringWithSeniors":
              this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "התנדבות עם מבוגרים"
              break;
               case "Cooking":
              this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = "בישול"
              break;
              case "SpecialChildren\r\n":
              this.listRealvolonteing[index].TypeOfVolunteeringCode.nameTypeOfVolunteering = " שמירה על ילדים מיוחדים"
              break;
    
            default:
              break;
          }
          let key2 = this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime
          switch (key2) {
            case "Morning   ":
              this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime="בוקר"
              break;
              case "Noon      ":
              this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime="צהריים"
              break;
              case "Evening   ":
              this.listRealvolonteing[index].volunteerTimeCode.nameVolunteerTime="ערב"
              break;      
            default:
              break;
          }}
      })
    if (this.listRealvolonteing != null)
      this.a = true
    else
      alert("no shifts")
    console.log(this.listRealvolonteing);


  }
  close() {
    this.router.navigate(['app-root'])

  }
  show() {
    this.b = false

    if (this.idInput != null)
      this.mitnadevService.getUserById(parseInt(this.idInput)).subscribe(ans => {
        this.user = ans
        
        if(this.user.userType.nameUserType=="Volunteer ")
           
        this.user.userType.nameUserType="מתנדב"
        else
        this.user.userType.nameUserType="מבקש עזרה"
           
        
        this.b = true
        console.log(this.user);
      })
  }
  add() {

    this.router.navigate([`/app-subject-volontering/${this.idInput}`])
  }
  si() {
    this.router.navigate(['/app-updatem'])
  }

  // update(){
  // {this.router.navigate(['/ app-update-n'])}
  // }
  // go(){
  // this.needHelpService.delete(this.id).subscribe(d=>{


  //    } )
  //    this.router.navigate(['/app-sch'])
  //   }

  //   show(){
  //     this.router.navigate(['/app-shown'])
  // }
  // add(){
  //   this.router.navigate(['/app-subject-volontering'])
  // }
  // up(){
  //   this.router.navigate(['/app-update-ncv'])

  // }
}



