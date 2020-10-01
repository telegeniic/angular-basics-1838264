import { AppModule } from './app.module';
import { AlumnoInputComponent } from './alumno-input/alumno-input.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AlumnoComponent },
  { path: 'input', component: AlumnoInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
