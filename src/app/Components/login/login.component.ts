import { Component, OnInit } from '@angular/core';
import { MitnadevService } from "src/app/Servises/mitnadev.service";
import { mitnadev } from "src/app/Model/mitnadev";
import { need_help } from "src/app/Model/needHelp";
import { Router } from "@angular/router";
import { NeedHelpService } from "src/app/Servises/need-help.service";
import { user } from 'src/app/Model/user';
import { MatDialog } from '@angular/material/dialog';
import { ManagerComponentDialogComponent } from '../manager-component-dialog/manager-component-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  idInput: string = ""
  user: user = new user()
  // mitadev: mitnadev = new mitnadev()
  // n: need_help = new need_help()
 
  constructor(public dialog: MatDialog,private mitnadevService: MitnadevService, private router: Router, private needhlpService: NeedHelpService) { }

  ngOnInit(): void {
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
  login() {
console.log("login");

    this.mitnadevService.getUser(this.idInput).subscribe(ans => {
      this.user = ans
      if(this.user==null){
        console.log(this.user);
        alert("הסיסמה שגויה")
        // this.openDialog("הסיסמה שגויה")
      }
        else
        if(this.user.userType.IdUserType==1)
           this.router.navigate([`/app-mitnadev-space/${this.user.Iduser}`])
        else{
          if(this.user.userType.IdUserType==16)
             this.router.navigate([`/app-needhelp-space/${this.user.Iduser}`])
      
    
   
    
      

     
       
    }
    })
    

   

  }
}
