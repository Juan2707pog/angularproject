import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup(
    {correo : new FormControl(''),
    contraseña : new FormControl(''),
    });

  constructor(private auSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async logeando(){
    const {correo,contraseña} = this.login.value;
    try {
      const user=await this.auSvc.login(correo,contraseña);
      if(user){
        this.router.navigate(['home']);
      }
    } catch (error) {
      console.error(error);
      
    }
  }
}
