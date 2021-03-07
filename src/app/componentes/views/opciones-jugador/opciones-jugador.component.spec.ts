import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesJugadorComponent } from './opciones-jugador.component';

describe('OpcionesJugadorComponent', () => {
  let component: OpcionesJugadorComponent;
  let fixture: ComponentFixture<OpcionesJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
