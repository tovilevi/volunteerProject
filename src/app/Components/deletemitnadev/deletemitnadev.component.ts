import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MitnadevService } from "src/app/Servises/mitnadev.service";

@Component({
  selector: 'app-deletemitnadev',
  templateUrl: './deletemitnadev.component.html',
  styleUrls: ['./deletemitnadev.component.css']
})
export class DeletemitnadevComponent implements OnInit {
id:string =sessionStorage.getItem('id')!



  constructor(private router:Router,private mitnadevService:MitnadevService,) { }

  ngOnInit(): void {
   
    this.m()
 
  }
m(){
  
  this.mitnadevService.delete(this.id).subscribe(d=>{
      console.log("+++++++++++++++++++++"+d)
     

     } )
     this.router.navigate(['/app-sch'])
}

}
