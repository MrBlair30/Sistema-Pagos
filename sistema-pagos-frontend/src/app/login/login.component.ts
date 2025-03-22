import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router:Router){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['1234', Validators.required]
    });
  }

  login(): void{
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;    

    let auth: Boolean = this.auth.login(username, password);

    if(auth){
      this.router.navigateByUrl("/admin");
    }else{
      Swal.fire({
        title: "Error al iniciar sesión",
        text: "El usuario o la contraseña son incorrectos",
        icon: "error"
      })
    }

  }

}
