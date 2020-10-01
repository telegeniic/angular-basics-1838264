import { AlumnoService } from './../alumno/alumno.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alumno-input',
  templateUrl: './alumno-input.component.html',
  styleUrls: ['./alumno-input.component.css'],
})
export class AlumnoInputComponent implements OnInit {
  constructor(private service: AlumnoService) {}
  //@Output() addAlumno = new EventEmitter<string>();
  nombre: string = '';

  alta() {
    //this.addAlumno.emit(this.nombre);
    //this.nombre;
    this.service.onAddAlumno(this.nombre);
  }

  ngOnInit(): void {}
}
