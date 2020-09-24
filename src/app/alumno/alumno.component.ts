import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  activo: boolean = true;
  alumnos: string[]= ["Jesus", "Martin", "Guajardo", "Olivo"];



  constructor() { }
  onClickActivar() {
    this.activo = !this.activo;
  }


  ngOnInit(): void {
  }

}

