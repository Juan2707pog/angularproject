import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-opciones-jugador',
  templateUrl: './opciones-jugador.component.html',
  styleUrls: ['./opciones-jugador.component.css']
})
export class OpcionesJugadorComponent implements OnInit {

 
  //idJugador:string|null;
  addJugador: FormGroup;
  constructor(
    private builder: FormBuilder,
    private jSvc: JugadoresService,
    private router: Router,
    private aRoute: ActivatedRoute,
    public fireAuth: AngularFireAuth,
    private auSvc: AuthService,
    private rutaActiva: ActivatedRoute) {
      this.addJugador = this.builder.group({
        nombre: ['', Validators.required],
        equipo: ['', Validators.required],
        posicion: ['', Validators.required],
        numero: ['', Validators.required],
      });

   }
  
  ngOnInit() {
   this.getJugadores();
  }
  anadirJugadorCreado() {
    
    this.crearJugador();
 
  }
  async crearJugador(){
    const jugador: any = {
      nombre: this.addJugador.value.nombre,
      equipo: this.addJugador.value.equipo,
      posicion: this.addJugador.value.posicion,
      numero: this.addJugador.value.numero,

    }; 
    return this.jSvc
    .addJugador(jugador)
    .then(() => {
        console.log("un saludo");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(jugador);
  }
  borrarJugador(nombre: string) {
    this.jSvc
      .deleteJugador(nombre)
      .then(() => {
        console.log('jugador eliminado');
 
      })
      .catch((error) => {
        console.log(error);
      });
  }
  jugadores: any[] = [];
  getJugadores() {

    this.jSvc.getJugador().subscribe(data =>{
      this.jugadores = []
      data.forEach((e: any) => {
        const jug: any = e.payload.val();
        //this.classs.keys = claseses.key;
        this.jugadores.push(jug);
        //console.log(c);
        //console.log(this.uid)
      })
      //console.log('clase',this.classs)
    })
  }
}
