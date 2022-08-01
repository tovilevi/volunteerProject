import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/Servises/cities.service';
import { cities } from "src/app/Model/cities";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

listCities:cities[]=[ ];

codeSelect:string=""
  constructor(private citiesService:CitiesService) { }
  ngOnInit(): void {
    this.getcities()
  }
  ok(){
    console.log(this.codeSelect)


    sessionStorage.setItem('codeCity',this.codeSelect);
  }
  show()
  {
    console.log("sdfghjhgfdfg")
    console.log(this.codeSelect)
    }
getcities(){
this.citiesService.GetALL().subscribe(c=>
 {(this.listCities)=c;
 console.log(this.listCities)
});

}
}
