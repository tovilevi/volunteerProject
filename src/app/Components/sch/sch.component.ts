import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GeneticService } from  'src/app/Servises/genetic.service';

@Component({
  selector: 'app-sch',
  templateUrl: './sch.component.html',
  styleUrls: ['./sch.component.css']
})
export class SCHComponent implements OnInit {
// foods: Food[] = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'}
//   ];
  constructor(private router:Router,private GeneticService:GeneticService) { }

  ngOnInit(): void {   this.g()
  }
  g(){
    // this.GeneticService.get().subscribe(d =>{alert(d+"השיבוץ בוצע בהצלחה")})
    // }
    // home(){
    //   this.router.navigate(['/app-root'])
    // }
}

}

// interface Food {
//   value: string;
//   viewValue: string;
// }
