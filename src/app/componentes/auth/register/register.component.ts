import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup(
    {correo : new FormControl(''),
    contraseña : new FormControl(''),
    });

  constructor(private auSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async registreando(){
    const {correo,contraseña} = this.register.value;
    try {
      const user=await this.auSvc.register(correo,contraseña);
      if(user){
        this.router.navigate(['home']);
      }
    } catch (error) {
      console.error(error);
      
    }
  }
}
