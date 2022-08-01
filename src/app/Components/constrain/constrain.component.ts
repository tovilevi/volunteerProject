import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { constrain } from "src/app/Model/constrain";

@Component({
  selector: 'app-constrain',
  templateUrl: './constrain.component.html',
  styleUrls: ['./constrain.component.css']
})
export class ConstrainComponent implements OnInit {
con:string[]=[]
i:number=5
g:string=this.i.toString()
  constructor(private router:Router) { }

  ngOnInit(): void {


this.con[1]=sessionStorage.getItem('index')!
console.log("dfggh"+ this.con)
 
  }

}
