import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlumnoService } from './alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  private alumnosSubs: Subscription;
  activo: boolean = true;
  //alumnos: string[]= ["Jesus", "Martin", "Guajardo", "Olivo"];
  //@Input() alumnos: string[] = ['Arturo', 'Astrid', 'Adriana'];
  alumnos: string[];

  constructor(private service: AlumnoService) {
    this.alumnos = service.alumnos;
  }

  onRemoveAlumno(name: string) {
    this.service.removeAlumno(name);
  }

  ngOnInit(): void {
    this.alumnos = this.service.alumnos;
    this.alumnosSubs = this.service.alumnosChanged.subscribe((alumnos) => {
      this.alumnos = alumnos;
    });
  }

  ngOnDestroy() {
    this.activo = !this.activo;
  }
}
