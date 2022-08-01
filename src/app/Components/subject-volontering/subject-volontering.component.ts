import { Component, OnInit } from '@angular/core';
import { SubjectVolonteringService } from 'src/app/Servises/subjectvolontering.service';
import { sv } from "src/app/Model/s_v";
import { constrain } from "src/app/Model/constrain";
import { NeedHelpService } from "src/app/Servises/need-help.service";
import {MitnadevService } from 'src/app/Servises/mitnadev.service';
import { ActivatedRoute, Router } from "@angular/router";
import { volunteering_Constraint_volunteer } from 'src/app/Model/volunteering_Constraint_volunteer';
import { needHelp_Constraint_volunteer } from 'src/app/Model/needHelp_Constraint_volunteer';
import { typeOfVolunteer } from 'src/app/Model/typeOfVolunteer';
import { shift } from 'src/app/Model/shift';
import { linkUserToTypeVolunteer } from 'src/app/Model/linkUserToTypeVolunteer';
import { linkUserToShift } from 'src/app/Model/linkUserToShift';
import { UserService } from 'src/app/Servises/user.service';
import { inlayTable } from 'src/app/Model/inlayTable';
import { ShowmsService } from 'src/app/Servises/showms.service';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-subject-volontering',
  templateUrl: './subject-volontering.component.html',
  styleUrls: ['./subject-volontering.component.css']
})
export class SubjectVolonteringComponent implements OnInit {
  listTypeVolunteer:typeOfVolunteer[]=[]
  listTimeVolunteer:shift[]=[]
  shift:shift=new shift()
  typeOfVolunteer:typeOfVolunteer=new typeOfVolunteer()
  linkusertotype:linkUserToTypeVolunteer=new linkUserToTypeVolunteer()
  linkusertoshift:linkUserToShift=new linkUserToShift()
  idInput:string|null=""
  listRealvolonteing: inlayTable[] = [];
  genderList: string[] = ["זכר", "נקבה","לא משנה לי"]
user:user=new user()
// lists_s_v:sv[]=[]
// constrain:constrain[]=[]
// codeSelect:number=-1
// code:number=-1
// c:string=''
// boll=false
// visible=false
// ending=false
// constraind:constrain[]=[]
//   constrainh:constrain[]=[]
//   codeSelectd:number=-1
//   codeSelecth:number=-1
// mvc:volunteering_Constraint_volunteer=new volunteering_Constraint_volunteer()
// ncv:needHelp_Constraint_volunteer=new needHelp_Constraint_volunteer()
  constructor(private mitnadevService: MitnadevService,private showShifts:ShowmsService,private userService:UserService, private aroute: ActivatedRoute,private subject_volontering:SubjectVolonteringService,private router:Router) { }
id:number=-1;
  ngOnInit(): void {
    
    this.idInput =this.aroute.snapshot.paramMap.get('id')
    console.log(this.idInput);
    if (this.idInput != null)
    this.mitnadevService.getUserById(parseInt(this.idInput)).subscribe(ans => {
      this.user = ans
    })
    this.subject_volontering.GetALLTypeOfVolunteer().subscribe(ans=>{
      this.listTypeVolunteer=ans
      for (let index = 0; index < this.listTypeVolunteer.length; index++) {
        let key = this.listTypeVolunteer[index].nameTypeOfVolunteering
        switch (key) {
          case "Childcare":
            this.listTypeVolunteer[index].nameTypeOfVolunteering = "שמירה על ילדים"
            break;
          case "Housework":
            this.listTypeVolunteer[index].nameTypeOfVolunteering = "עבודות בית"
            break;
             case "VolunteeringInHospitals":
              delete this.listTypeVolunteer[index];
             
            break; 
            case "VolunteeringWithSeniors":
              this.listTypeVolunteer[index].nameTypeOfVolunteering = "התנדבות עם מבוגרים"
            break;
             case "Cooking":
              this.listTypeVolunteer[index].nameTypeOfVolunteering = "בישול"
            break;
            case "SpecialChildren\r\n":
              this.listTypeVolunteer[index].nameTypeOfVolunteering= "שמירה על ילדים מיוחדים"
            break;
  
          default:
             this.listTypeVolunteer[index].nameTypeOfVolunteering= "התנדבות בבית חולים"
            

            break;
        }
        }
        
    })
    this.subject_volontering.GetALLShift().subscribe(ans=>{
      this.listTimeVolunteer=ans
      for (let index = 0; index < this.listTimeVolunteer.length; index++) {
       
        let key2 = this.listTimeVolunteer[index].nameVolunteerTime
        switch (key2) {
          case "Morning   ":
            this.listTimeVolunteer[index].nameVolunteerTime="בוקר"
            break;
            case "Noon      ":
              this.listTimeVolunteer[index].nameVolunteerTime="צהריים"
            break;
            case "Evening   ":
              this.listTimeVolunteer[index].nameVolunteerTime="ערב"
            break;      
          default:
            break;
        }}
    })
    if(this.idInput){
    this.userService.getUserById(parseInt(this.idInput)).subscribe(ans=>{
      console.log(ans);
      this.linkusertoshift.idUser=ans
      this.linkusertotype.idUser=ans
    })
    this.showShifts.getUser(parseInt(this.idInput)).subscribe(ans => {
      this.listRealvolonteing = ans
    })
    // for (let index = 0; index < array.length; index++) {
    //   for (let index = 0; index < this.listRealvolonteing.length; index++) {
      
      
    //   }
      
    // }
    
  }
    
    
  //  this.getsv();
  //  this.subject_volontering.getalldys()
  //  .subscribe(c => {(this.constraind)=c;
  //    console.log(this.constraind)
  //  }
  
  //  );
  //  this.subject_volontering.getallH()
  //  .subscribe(c => {(this.constrainh)=c;
  //    console.log(this.constrainh)
  //  }
  
  //  );
  }
//   getsv(){
// this.subject_volontering.GetALL().subscribe(c=>
//   {(this.lists_s_v)=c;
//   console.log(this.lists_s_v)
// });


// }
// bringCon()
// {
  
//   this.subject_volontering.bring(this.codeSelect).subscribe(c => {(this.constrain)=c;
//   console.log(this.constrain)
//  console.log(this.c=this.constrain[1].Name_c)
//  for(var index = 0; index <this.constrain.length; index++)
//   {
//   sessionStorage.setItem('index',this.constrain[index].Name_c)
//   }
  
//   this.visible=true
//  //this.router.navigate(['/app-constrain'])
// });

// }
enter(){
  console.log(this.shift.IdVolunteerTime);
  console.log(this.listTimeVolunteer);
  console.log(this.listTypeVolunteer);
  
  
  this.linkusertoshift.idVolunteerTime=this.shift
  // alert(this.shift.IdVolunteerTime+this.shift.nameVolunteerTime)
  this.linkusertotype.idTypeOfVolunteering=this.typeOfVolunteer
  // alert(this.typeOfVolunteer.IdTypeOfVolunteering+this.typeOfVolunteer.nameTypeOfVolunteering)
 
  
    
  this.subject_volontering.insert(this.linkusertoshift).subscribe()
  this.subject_volontering.insertTypeOfVolunteer(this.linkusertotype).subscribe()
  if(this.user.userType.IdUserType==1)
  this.router.navigate([`/app-mitnadev-space/${this.idInput}`])
  else
  this.router.navigate([`/app-needhelp-space/${this.idInput}`])
  
//   sessionStorage.setItem('idsubjectvolontering',this.codeSelect.toString())
//   if( sessionStorage.getItem('statusSign') == 'm')
//   {  console.log("subscribe?????");
//     this.mvc.Id_volunteering=this.codeSelect
//     this.mvc.Id_Constraint=this.code
//     this.mvc.Id_volunteer=Number(sessionStorage.getItem('id'))           
//     this.mvc.the_Constraint='hh'
  
//     this.MitnadevService.insertMCv(this.mvc).subscribe(a=>console.log(a));
//   }

// else

// {console.log(this.code)
//   this.boll=true
// this.ncv.Id_N_H=Number( sessionStorage.getItem('id'))
// this.ncv.Id_Constraint=this.code
// this.ncv.Id_volunteer=513121323
// this.ncv.Id_volunteering=this.codeSelect
// this.ncv.the_Constraint='hh'
// console.log(this.ncv)
// this.needHelpService.insertncv(this.ncv).subscribe(a=>console.log(a));}

}
// day(){
//   this.boll=true
// }
// end(){
//   this.ending=true
// }
// home(){
//   this.router.navigate(['/app-root'])
// }
}