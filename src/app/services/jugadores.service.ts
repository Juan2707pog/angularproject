import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

    constructor(public db: AngularFireDatabase) {
    
    }
    addJugador(jugador: any): Promise<any>{
      //return this.firestore.collection('jugador').add(jugador);
      //console.log("Jugador añadido ;) ");
      const path = `jugadores/${jugador.nombre}`
    /*const as = {
      nombre: jugador.nombre,
      equipo: jugador.equipo,
      posicion: jugador.posicion,
      numero: jugador.numero
    }*/
    return this.db.object(path).set(jugador)
      .catch(error => console.log(error));
    }
    deleteJugador(nombre: string): Promise<any>{
      //return this.firestore.collection('item').doc(id).delete();
      const path = `jugadores/${nombre}`
      return this.db.object(path).remove();
    }
    getJugador(): Observable<any>{
      //return this.firestore.collection('item', ref => ref.orderBy('creationDate','asc')).snapshotChanges();
      const path = `jugadores/`
      //console.log(this.db.list(path).snapshotChanges())
      return this.db.list(path).snapshotChanges();
    }
}
