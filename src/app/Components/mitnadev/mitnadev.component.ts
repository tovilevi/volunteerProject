import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { mitnadev } from 'src/app/Model/mitnadev';
import {MitnadevService } from 'src/app/Servises/mitnadev.service';
import {FormControl} from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-mitnadev',
  templateUrl: './mitnadev.component.html',
  styleUrls: ['./mitnadev.component.css']
})

export class MitnadevComponent implements OnInit {
 idInput:string=""
  newmitnadev:mitnadev=new mitnadev();
  disableS:boolean=false
  disableL:boolean=false
  constructor(private mitnadevService:MitnadevService,private router:Router) { 
    console.log('mitnsdev_ts')
  }
  ngOnInit(): void {sessionStorage.setItem('statusSign','m')}
  
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
