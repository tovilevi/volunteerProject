import { Component, OnInit } from '@angular/core';
import { inlayTable } from 'src/app/Model/inlayTable';
import { realvolonteing } from 'src/app/Model/realvolontering';
import { type } from 'src/app/Model/type';
import { GeneticService } from 'src/app/Servises/genetic.service';
import { MitnadevService } from 'src/app/Servises/mitnadev.service';
import { ShowmsService } from 'src/app/Servises/showms.service';
import {MatDialog, matDialogAnimations, MatDialogModule} from '@angular/material/dialog';
import { ManagerComponentDialogComponent } from '../manager-component-dialog/manager-component-dialog.component';
import { user } from 'src/app/Model/user';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  b: string = ''
  a: boolean = false
  c: boolean = false

  t: type[] = []
  us:user=new user()
  // listRealvolonteing: realvolonteing[] = []
 listRealvolonteing:inlayTable[]=[]
  constructor(public dialog: MatDialog,private ShowmsService: ShowmsService, private shibutzService: GeneticService) { }

  ngOnInit(): void {
    // this.ShowmsService.GetALL().subscribe((ans: realvolonteing[]) => {

    //   (this.listRealvolonteing) = ans;
    // });
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
  shibuz() {

    this.ShowmsService.GetALL().subscribe((ans:inlayTable[]) => {
      (this.listRealvolonteing) = ans;
      this.c=false
      this.change()
    });
    
  }
  change() {
    console.log(this.listRealvolonteing);
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
      }

    }

    this.a = true
  }
  init() {
    this.listRealvolonteing = []
    this.shibutzService.get().subscribe((ans: string) => {
      (this.b) = ans;
      this.c=true
    });

    
    // this.ShowmsService.GetALL().subscribe((ans: realvolonteing[]) => {
    //   (this.listRealvolonteing) = ans;
    // });


  }

}
