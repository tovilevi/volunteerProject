import { Component, OnInit } from '@angular/core';
import { NeedHelpService } from "src/app/Servises/need-help.service";
import { need_help } from "src/app/Model/needHelp";
import { needHelp_Constraint_volunteer } from 'src/app/Model/needHelp_Constraint_volunteer';
import { cities } from 'src/app/Model/cities';
import { CitiesService } from 'src/app/Servises/cities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { community } from 'src/app/Model/community';
import { type } from 'src/app/Model/type';
import { user } from 'src/app/Model/user';
import { UserTypeService } from 'src/app/Servises/user-type.service';
import { CommunityService } from 'src/app/Servises/community.service';
import { MitnadevService } from 'src/app/Servises/mitnadev.service';
@Component({
  selector: 'app-update-n',
  templateUrl: './update-n.component.html',
  styleUrls: ['./update-n.component.css']
})
export class UpdateNComponent implements OnInit {
  idInput: string | null = ""
  genderList: string[] = ["זכר", "נקבה"]
  listCommunity: community[] = [];
  listUserType: type[] = [];
  userT: type = new type()
  c: community = new community()
  u: user = new user()
  user: user = new user()
  ans: number = -1
  n: string = ''
  minDate = new Date(1900, 0, 1);
  maxDate = new Date(2006, 0, 1);
  constructor(private router:Router,private mitnadevService: MitnadevService,private userTService:UserTypeService, private communityService:CommunityService, private aroute: ActivatedRoute,private needHelpService:NeedHelpService,private citiesService:CitiesService) { }
listNeedHlpe:need_help[]=[]
newNeedHelp:need_help=new need_help();
listncv:needHelp_Constraint_volunteer[]=[]
ncv:needHelp_Constraint_volunteer=new needHelp_Constraint_volunteer()
hlpe:string=''
result:number=-1
bool=false
listCities:cities[]=[ ];
  ngOnInit(): void {
    this.idInput = this.aroute.snapshot.paramMap.get('id')
    console.log(this.idInput);
    if (this.idInput != null)
      this.mitnadevService.getUserById(parseInt(this.idInput)).subscribe(ans => {
        this.user = ans
        console.log(this.user);
      })
    this.getcommunity()
    this.getUserType()
    // this.getcities()
    // this.needHelpService.getneedcv().subscribe(d=>
    //   {(this.listncv)=d;
    //   console.log(this.listncv)
    

    //   for (var index = 0; index <this.listncv.length; index++)
    //   {
    //     if(this.listncv[index].Id_N_H.toString()== sessionStorage.getItem('id'))
    //       {
    //         this.ncv = this.listncv[index]
    // console.log(this.ncv)
    //       }
         
    //   }

//     })
      
//     this.needHelpService.get().subscribe(c=>
//   {(this.listNeedHlpe)=c;
//   console.log(this.listNeedHlpe)
//   for (var index = 0; index <this.listNeedHlpe.length; index++)
//   {
//     if(this.listNeedHlpe[index].id_N_H.toString()== sessionStorage.getItem('id'))
//       {
//         this.newNeedHelp = this.listNeedHlpe[index]
// console.log(this.newNeedHelp)
//       }
     
//   }
// });


  }
  getcommunity() {
    this.communityService.GetALL().subscribe(c => {
      (this.listCommunity) = c;
      console.log(this.listCommunity)
    });

  }
  getUserType() {
    this.userTService.GetALL().subscribe(u => {
      (this.listUserType) = u;
      console.log(this.listUserType)
    });
  }
b(){
 this.bool=true
}

update()
{
   this.needHelpService.update(this.user.Iduser, this.user).subscribe(ans=>{
     let i=ans
     console.log(i);
     if(this.user.userType.IdUserType==1)
     this.router.navigate([`/app-mitnadev-space/${this.idInput}`])
     else
     this.router.navigate([`/app-needhelp-space/${this.idInput}`])
     
   }
 
);
}
getcities(){
  this.citiesService.GetALL().subscribe(c=>
   {(this.listCities)=c;
   console.log(this.listCities)
  });
  }
}
