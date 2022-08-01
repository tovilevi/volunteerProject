import { Component, OnInit } from '@angular/core';
import { constrain } from 'src/app/Model/constrain';
import { needHelp_Constraint_volunteer } from 'src/app/Model/needHelp_Constraint_volunteer';
import { sv } from 'src/app/Model/s_v';
import { volunteering_Constraint_volunteer } from 'src/app/Model/volunteering_Constraint_volunteer';
import { NeedHelpService } from 'src/app/Servises/need-help.service';
import {MitnadevService } from 'src/app/Servises/mitnadev.service';
import { SubjectVolonteringService } from 'src/app/Servises/subjectvolontering.service';
import { ActivatedRoute, Router } from "@angular/router";
import { inlayTable } from 'src/app/Model/inlayTable';
import { ShowmsService } from 'src/app/Servises/showms.service';
import { user } from 'src/app/Model/user';
@Component({
  selector: 'app-update-ncv',
  templateUrl: './update-ncv.component.html',
  styleUrls: ['./update-ncv.component.css']
})
export class UpdateNcvComponent implements OnInit {
  idInput:string|null=""
  listRealvolonteing: inlayTable[] = [];
it:inlayTable=new inlayTable()
user: user = new user()

  listsn_c_v:sv[]=[]
  newlistn_s_v:needHelp_Constraint_volunteer[]=[]
  listmcv:volunteering_Constraint_volunteer[]=[]
  newlistmcv:volunteering_Constraint_volunteer[]=[]
  constrain:constrain[]=[]
  codeSelect:number=-1
  code:number=-1
  c:string=''
  boll=false
  visible=false
  mitnadevbool=false
  constraind:constrain[]=[]
    constrainh:constrain[]=[]
    codeSelectd:number=-1
    codeSelecth:number=-1
    i=0
  mvc:volunteering_Constraint_volunteer=new volunteering_Constraint_volunteer()
  ncv:needHelp_Constraint_volunteer=new needHelp_Constraint_volunteer()
  constructor(private mitnadevService: MitnadevService,private showShifts:ShowmsService, private aroute: ActivatedRoute,private needHelpService:NeedHelpService,private MitnadevService:MitnadevService,private subject_volontering:SubjectVolonteringService,private router:Router) { }

  ngOnInit(): void {
    this.idInput =this.aroute.snapshot.paramMap.get('id')
    console.log(this.idInput);
    if(this.idInput!=null)
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
        }}
    })





    // if( sessionStorage.getItem('statusSign') =='m')
    // this.mitnadevbool=true
  // this.getNCV() 
  //this.getMCV()

 
}
getNCV()
{
  this.subject_volontering.GetALL()
  .subscribe(c=>
    {
       (this.listsn_c_v)=c;
      console.log(this.listsn_c_v +"היי")
         
    }  );
}
//getMCV()
//{
 // this.MitnadevService.getmcv()
//  .subscribe(c=>
 //   {
//(this.listmcv)=c;
 ////   console.log(this.listmcv)
  ////  for (let index = 0; index < this.listmcv.length; index++) 
  //  {
  //    if(this.listmcv[index].Id_volunteering.toString()==sessionStorage.getItem('id'))
  //    {
       
   //       this.newlistmcv[this.i] = this.listmcv[index];
   ////       this.i++
   //     }
    
  //  }
 // });
//}
//bringCon()
//{
//  
//  this.subject_volontering.bring(this.codeSelect).subscribe(c => {(this.constrain)=c;
//  console.log(this.constrain)
// for(var index = 0; index <this.constrain.length; index++)
//  {
//  sessionStorage.setItem('index',this.constrain[index].Name_c)
//  }
//  
//  this.visible=true
//
// });
//
 
update(){
console.log(this.listRealvolonteing);
console.log(this.it.IdInlayTable);

this.showShifts.deleteShift(this.it.IdInlayTable).subscribe()
//   this.boll=true
//   sessionStorage.setItem('idsubjectvolontering',this.codeSelect.toString())
//   if( sessionStorage.getItem('statusSign') =='m'){
   
//   console.log("subscribe?????");
//   this.mvc.Id_volunteering=this.codeSelect
//  this.mvc.Id_Constraint=1
//   this.mvc.Id_volunteer=Number(sessionStorage.getItem('id'))           
//  this.mvc.the_Constraint='hh'
 
//    this.MitnadevService.deleteMCv(this.mvc).subscribe(a=>console.log(a));
//    this.router.navigate(['/app-sch'])
//   }


// else

// {console.log(this.code)
//  this.boll=true
 
// this.ncv.Id_N_H=Number( sessionStorage.getItem('id'))
// this.ncv.Id_Constraint=this.code
// this.ncv.Id_volunteer=513121323
// this.ncv.Id_volunteering=this.codeSelect
// this.ncv.the_Constraint='hh'
// console.log(this.ncv)
// this.needHelpService.deletencv(this.ncv).subscribe(a=>console.log(a));
// this.router.navigate(['/app-sch'])
// }
if(this.user.userType.IdUserType==1)
  this.router.navigate([`/app-mitnadev-space/${this.idInput}`])
  else
  this.router.navigate([`/app-needhelp-space/${this.idInput}`])
  
}
day(){
  this.boll=true
}

  }
  

