import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { realvolonteing } from "src/app/Model/realvolontering";
import { ShowmsService } from "src/app/Servises/showms.service";
import { tablerealvolonteing } from "src/app/Model/tablerealvolontering";
import { MitnadevService } from 'src/app/Servises/mitnadev.service';
import { mitnadev } from 'src/app/Model/mitnadev';
import { NeedHelpService } from "src/app/Servises/need-help.service";
import { need_help } from "src/app/Model/needHelp";
import { SubjectVolonteringService } from 'src/app/Servises/subjectvolontering.service';
import { sv } from 'src/app/Model/s_v';
import { constrain } from 'src/app/Model/constrain';

@Component({
  selector: 'app-showms',
  templateUrl: './showms.component.html',
  styleUrls: ['./showms.component.css']
})
export class ShowmsComponent implements OnInit {
  liserealvolonter: realvolonteing[] = []

  lists_s_v: sv[] = []
  listVolontering: mitnadev[] = []
  listneedhelp: need_help[] = []
  listday: constrain[] = []
  listhouers: constrain[] = []
  constructor(private SubjectVolonteringService: SubjectVolonteringService, private needHelpService: NeedHelpService, private MitnadevService: MitnadevService, private router: Router, private ShowmsService: ShowmsService) { }

  ngOnInit(): void {
    this.getre()
  }


  getre() {

    this.MitnadevService.s(sessionStorage.getItem("id")!).subscribe(C => {
      (this.liserealvolonter) = C;
    });

    this.MitnadevService.get().subscribe(C => {
      (this.listVolontering) = C;
      console.log(this.liserealvolonter)
    });

    this.needHelpService.get().subscribe(C => {
      (this.listneedhelp) = C;
    });

    this.SubjectVolonteringService.GetALL().subscribe(C => {
      (this.lists_s_v) = C;
    });
    this.SubjectVolonteringService.getalldys().subscribe(C => {
      (this.listday) = C;

    });

    this.SubjectVolonteringService.getallH().subscribe(C => {
      (this.listhouers) = C;
    });


  }

  checkVolenter(id1: string) {
    for (var index = 0; index < this.listVolontering.length; index++) {
      if (this.listVolontering[index].id == id1)
        return this.listVolontering[index].firstName + " " + this.listVolontering[index].lastname;
    }
    return null;
  }
  checkNeedHelp(id2: string) {
    for (var index = 0; index < this.listneedhelp.length; index++) {

      if (this.listneedhelp[index].id_N_H == id2) {
        return this.listneedhelp[index].firstName + " " + this.listneedhelp[index].lastname;
      }
    }
    return null;
  }
  checkvolontering(id: number) {
    for (var index = 0; index < this.lists_s_v.length; index++) {

      if (this.lists_s_v[index].Id_volunteering == id) {
        console.log(this.lists_s_v[index].Name_volunteer)
        return this.lists_s_v[index].Name_volunteer;

      }
    }
    return null;
  }
  checkday(id: number) {
    id = id + 34
    for (var index = 0; index < this.listday.length; index++) {

      if (this.listday[index].ID_Constraints == id) {
        console.log(this.listday[index].Name_c)
        return this.listday[index].Name_c;

      }
    }
    return null;
  }
  checkhouers(id: number) {
    id = id + 41
    for (var index = 0; index < this.listhouers.length; index++) {

      if (this.listhouers[index].ID_Constraints == id) {
        console.log(this.listhouers[index].Name_c)
        return this.listhouers[index].Name_c;

      }
    }
    return null;
  }
  getNishbetzet(day: number, hour: number) {
    // for (var index = 0; index < this.liserealvolonter.length; index++) {
    //   if (this.liserealvolonter[index].day_r_v == day && this.liserealvolonter[index].hour_r_v == hour)
    //     return this.checkvolontering(this.liserealvolonter[index].Id_volunteering) + ' ' + this.checkNeedHelp(this.liserealvolonter[index].Id_N_H.toString())
    // }
    return '---'
  }
}
