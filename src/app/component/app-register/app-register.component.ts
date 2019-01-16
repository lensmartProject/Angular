import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
 /*  styleUrls: ['./app-register.component.css'] */
})
export class AppRegisterComponent  {

  constructor(private router: Router) { }

  
  public onLoginClick(){
    this.router.navigate(['./login']);
}

}
