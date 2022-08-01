import { Component, OnInit } from '@angular/core';
import { mitnadev } from "src/app/Model/mitnadev";
import { need_help } from "src/app/Model/needHelp";
import { MitnadevService } from "src/app/Servises/mitnadev.service";
import { Router } from "@angular/router";
import { NeedHelpService } from "src/app/Servises/need-help.service";
import { CitiesService } from "src/app/Servises/cities.service";
import { cities } from "src/app/Model/cities";
import { user } from 'src/app/Model/user';
import { type } from 'src/app/Model/type';
import { community } from 'src/app/Model/community';
import { UserService } from 'src/app/Servises/user.service';
import { UserTypeService } from 'src/app/Servises/user-type.service';
import { CommunityService } from 'src/app/Servises/community.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ManagerComponentDialogComponent } from '../manager-component-dialog/manager-component-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  status: string = ""
  user: user = new user()
  ans: number = -1
  n: string = ''
  genderList: string[] = ["זכר", "נקבה"]
  listCommunity: community[] = [];
  listUserType: type[] = [];
  userT: type = new type()
  c: community = new community()
  u: user = new user()
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2006, 0, 1);
  codeSelect: number = -1
  mitnadev: mitnadev = new mitnadev()
  need_help: need_help = new need_help()
  constructor(public dialog: MatDialog,private communityService: CommunityService, private userTService: UserTypeService, private userService: UserService, private mitnadevService: MitnadevService, private router: Router, private NeedHelpService: NeedHelpService, private citiesService: CitiesService) {
    // if(sessionStorage.getItem('statusSign')=='m')
    // this.status="מתנדב"
    // else
    //   this.status="צריך עזרה"
  }

  ngOnInit(): void {

    this.getcommunity()
    this.getUserType()

  }
  openDialog(id:any): void {
    console.log(id);
    
    const dialogRef = this.dialog.open(ManagerComponentDialogComponent, {
      width: '250px',
      data: {id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  group = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    phon: new FormControl(null, Validators.required),
    userType: new FormControl(null, Validators.required),
    idGroup: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),

  });
  // this.getcities()
  insert1() {
  
    this.mitnadevService.getUser(this.group.value.password).subscribe(ans => {
      this.u = ans
      console.log(this.u);
      if (this.u == null) {
        this.userService.insertMCv(this.group.value).subscribe(ans => {
          this.codeSelect = ans
          this.router.navigate(['/app-login'])

          // if (this.user.userType.IdUserType == 1)
          //   this.router.navigate([`/app-mitnadev-space/${this.user.Iduser}`])
          // else
          // if (this.user.userType.IdUserType == 16)
          //   this.router.navigate([`/app-needHelp-space/${this.user.Iduser}`])

        })
      }
      else {
        this.openDialog("הסיסמה בשימוש! אנא החלף סיסמה")
      }
    })

    // this.userTService.getUserType("askingHelp").subscribe(ans => {
    //   this.user.userType = ans
    //   alert(this.user.userType.IdUserType)
    // })
    // this.communityService.getCommunity("a").subscribe(ans => {
    //   this.user.idGroup = ans
    //   alert(this.user.idGroup.IdCommunities)
    // })

  }
  onSubmit() {

    if(this.group.valid)
       this.insert1()

  }
  insert() {
    if (this.status == "מתנדב") {
      console.log(this.codeSelect)
      //sessionStorage.setItem('id',this.mitnadev.id)
      this.mitnadev.city = this.codeSelect
      this.mitnadevService.insertmitnadev(this.mitnadev).subscribe
        (m => {
          (this.ans) = m;
          if (m == 1)
            this.router.navigate(['/app-subject-volontering'])
          else
            if (m == 2)
              alert("המתנדב קיים כבר במערכת")
            else
              alert("שגיאת התחברות")

        })
    }

    else {
      this.need_help.id_N_H = this.mitnadev.id
      this.need_help.firstName = this.mitnadev.firstName
      this.need_help.lastname = this.mitnadev.lastname
      this.need_help.city = this.codeSelect
      this.need_help.tel = this.mitnadev.tel
      this.need_help.address_ = this.mitnadev.address_
      this.need_help.mail = this.mitnadev.mail
      this.need_help.age = this.mitnadev.age
      sessionStorage.setItem('id', this.need_help.id_N_H)
      console.log(this.need_help)
      this.NeedHelpService.insertneed_help(this.need_help).subscribe
        (m => {
          (this.ans) = m;
          if (m == 1) { this.router.navigate(['/app-subject-volontering']) }


          alert("needhelp")
        })
    }

  }


  // getcities() {
  //   this.communityService.GetALL().subscribe(c => {
  //     (this.listCities) = c;
  //     console.log(this.listCities)
  //   });
  // }
  getcommunity() {
    this.communityService.GetALL().subscribe(c => {
      (this.listCommunity) = c;
      console.log(this.listCommunity)
    });

  }
  getUserType() {
    this.userTService.GetALL().subscribe(u => {
      (this.listUserType) = u;
      for (let index = 0; index < this.listUserType.length; index++) {
        let key2 = this.listUserType[index].nameUserType
        switch (key2) {
          case "Volunteer ":
            this.listUserType[index].nameUserType = "מתנדב"
            break;
          case "askingHelp":
            this.listUserType[index].nameUserType = "מבקש עזרה"
            break;
          default:
            break;
        }
      }
      console.log(this.listUserType)
    });
  }
}