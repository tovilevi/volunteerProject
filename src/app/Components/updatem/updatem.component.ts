import { Component, OnInit } from '@angular/core';
import { mitnadev } from "src/app/Model/mitnadev";
import { MitnadevService } from "src/app/Servises/mitnadev.service";

@Component({
  selector: 'app-updatem',
  templateUrl: './updatem.component.html',
  styleUrls: ['./updatem.component.css']
})
export class UpdatemComponent implements OnInit {
listmitnadev:mitnadev[]=[]
newmitnadev:mitnadev=new mitnadev()
result:number=-1
  constructor(private MitnadevService:MitnadevService) { }

  ngOnInit(): void {

   this.MitnadevService.get().subscribe(c=>

      {
        (this.listmitnadev)=c;
        console.log(this.listmitnadev)
         for (var index = 0; index <this.listmitnadev.length; index++)
            {
             if(this.listmitnadev[index].id.toString()== sessionStorage.getItem('id'))
               {
                  this.newmitnadev = this.listmitnadev[index]
                  console.log(this.newmitnadev)
                }
     
             }
      });

  }
update(){
this.MitnadevService.update(this.newmitnadev).subscribe(c=>
  {(this.result)=c;
  console.log(this.result)
});
}
}
