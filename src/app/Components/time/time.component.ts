import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { SubjectVolonteringService } from 'src/app/Servises/SubjectVolontering.Service';
import { constrain } from "src/app/Model/constrain";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  constrain:constrain[]=[]
  constrainh:constrain[]=[]
  codeSelect:number
  codeSelecth:number
  constructor(private subject_volontering:SubjectVolonteringService) { }

  ngOnInit(): void {
    
    this.subject_volontering.getalldys()
    .subscribe(c => {(this.constrain)=c;
      console.log(this.constrain)
    }
   
    );
    this.subject_volontering.getallH()
    .subscribe(c => {(this.constrainh)=c;
      console.log(this.constrainh)
    }
   
    );
  }
  
  
 
}
