import { Component, OnInit } from '@angular/core';
import { MitnadevService } from "src/app/Servises/mitnadev.service";
import { mitnadev } from "src/app/Model/mitnadev";
import { Router, ActivatedRoute } from "@angular/router";
import { ShowmsService } from 'src/app/Servises/showms.service';
import { realvolonteing } from 'src/app/Model/realvolontering';
import { inlayTable } from 'src/app/Model/inlayTable';
import { user } from 'src/app/Model/user';
@Component({
  selector: 'app-mitnadev-space',
  templateUrl: './mitnadev-space.component.html',
  styleUrls: ['./mitnadev-space.component.css']
})
export class MitnadevSpaceComponent implements OnInit {
  mitnadev: mitnadev = new mitnadev()
  user: user = new user()
  a: boolean = false
  b: boolean = false
us:user=new user()
  idInput: string | null = ""
  listRealvolonteing: inlayTable[] = [];
  constructor(private showShifts: ShowmsService,
    private mitnadevService: MitnadevService,
    private router: Router, private aroute: ActivatedRoute) { }


  ngOnInit(): void {
    this.idInput = this.aroute.snapshot.paramMap.get('id')
    console.log(this.idInput);
    if(this.idInput!=null)
    this.mitnadevService.getUserById(parseInt(this.idInput)).subscribe(ans=>{
      this.us=ans
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
  upd(){
    this.router.navigate([`/app-update-n/${this.idInput}`])

  }
  ghow() {
    this.b = false
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
        if (this.listRealvolonteing != null)
          this.a = true
        else
          alert("no shifts")
        console.log(this.listRealvolonteing);
      })



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
    this.b = false

    this.router.navigate([`/app-subject-volontering/${this.idInput}`])
  }
  go() {
    this.b = false

    console.log("deletemitnade")
    this.router.navigate(['/app-deletemitnadev'])
  }
  si() {
    this.b = false

    this.router.navigate(['/app-updatem'])
  }
  insert() {
    this.b = false

    this.mitnadevService.insertmitnadev(this.mitnadev).subscribe(m => {

    })
  }

  up() {
    this.b = false

    this.router.navigate([`/app-update-ncv/${this.idInput}`])

  }
  close() {
    this.router.navigate(['app-root'])


  }

}

