import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlumnoService {
  //alumnosDummy: string[] = ['Juan', 'Martin'];
  alumnos: string[] = ['Carlos', 'celia', 'Carmen'];
  alumnosChanged = new Subject<string[]>();

  onAddAlumno(name: string) {
    this.alumnos.push(name);
    this.alumnosChanged.next(this.alumnos);
  }

  removeAlumno(name: String) {
    this.alumnos = this.alumnos.filter((alumno) => {
      return alumno != name;
    });
    this.alumnosChanged.next(this.alumnos);
  }
}
