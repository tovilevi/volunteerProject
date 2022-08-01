import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MitnadevService } from './Servises/mitnadev.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:boolean=false
  title = 'angular'
  isdisable:boolean=true
  visible:boolean=true
  constructor(private router:Router, private mitnadevService:MitnadevService){}
  ngOnInit(): void {
    this.a=true
  }
  Entrance()
  {
  this.isdisable=false

    this.a=false
    this.router.navigate(['/app-login'])
  }
  signup(){
    this.a=false
    this.isdisable=false

    this.router.navigate(['/app-signup'])
  }
  mitnadev()
  {
  this.isdisable=false
  this.router.navigate(['/app-mitnadev'])
  }
  manager(){
    this.a=false
    this.isdisable=false

  this.router.navigate(['/app-login-manager'])

  }
needHelp() 
  {
  this.isdisable=false
  this.router.navigate(['/app-nedd-help'])
  }
}
