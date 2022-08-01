// import { Component, OnInit } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { user } from 'src/app/Model/user';
import { ManagerComponent } from '../manager/manager.component';
@Component({
  selector: 'app-manager-component-dialog',
  templateUrl: './manager-component-dialog.component.html',
  styleUrls: ['./manager-component-dialog.component.css']
})
export class ManagerComponentDialogComponent implements OnInit {
  dataa: string = ''
  a: boolean = false
  b: boolean = false
  constructor(public dialogRef: MatDialogRef<ManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
  onNoClick(): void {
    console.log(this.data);
    this.dataa = this.data
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
