import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

  constructor(public authService: AuthService){
  
  }

  logout(){
    //let username = this.authService.username+" con roles: "+this.authService.roles;
    //alert("Hasta la próxima "+username+" ;(");
    this.authService.logout();
  }

}
