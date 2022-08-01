import { Component, OnInit } from '@angular/core';
import { need_help } from 'src/app/Model/needHelp';
import { NeedHelpService } from 'src/app/Servises/need-help.service';

@Component({
  selector: 'app-nedd-help',
  templateUrl: './nedd-help.component.html',
  styleUrls: ['./nedd-help.component.css']
})
export class NeddHelpComponent implements OnInit {
  idInput:string='';
   disableS:boolean=false
  disableL:boolean=false
  newneedhelp:need_help=new need_help();
  constructor(private needHelpService:NeedHelpService) { }

  ngOnInit(): void {sessionStorage.setItem('statusSign','n')
  }
signup()
{
this.disableS=true
this.disableL=false
}
login()
{
  
 
this.disableL=true
this.disableS=false
}
}
