import { Injectable } from '@angular/core';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario:User;
  constructor(public fireAuth: AngularFireAuth) { }
  async login(correo:string,contraseña:string){
    try {
      const resultado=await this.fireAuth.signInWithEmailAndPassword(correo,contraseña);
      return resultado;
    } catch (error) {
      console.error(error);
    }
  }
  async register(correo: string, contraseña: string) {
    try {
      const result = await this.fireAuth.createUserWithEmailAndPassword(
        correo,
        contraseña
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.fireAuth.signOut(); console.log("Has cerrado sesión ;) ");
    } catch (error) {
      console.log(error);
    }
  }
}
