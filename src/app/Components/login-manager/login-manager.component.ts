import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  idInput: string = ""
  constructor( private router: Router) { }
  a: boolean = false
  ngOnInit(): void {
  }
  login() {
    if (this.idInput == "12345"){
      this.a = true
      this.router.navigate(['/app-manager'])

    }
    else
    alert("סיסמה שגויה!!!")
  }
}
