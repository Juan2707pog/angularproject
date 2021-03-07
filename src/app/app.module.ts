import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartido/navbar/navbar.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { HomeComponent } from './componentes/home/home.component';
import { PlayersComponent } from './componentes/views/players/players.component';
import { ProfileComponent } from './componentes/views/profile/profile.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpcionesJugadorComponent } from './componentes/views/opciones-jugador/opciones-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PlayersComponent,
    ProfileComponent,
    InterfacesComponent,
    OpcionesJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
