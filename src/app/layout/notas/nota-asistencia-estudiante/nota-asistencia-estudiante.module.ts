import { CommonModule } from '@angular/common';
import {NotaAsistenciaEstudianteRoutingModule} from './nota-asistencia-estudiante-routing.module';
import {NotaAsistenciaEstudianteComponent} from './nota-asistencia-estudiante.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [NotaAsistenciaEstudianteComponent],
  imports: [
    CommonModule, NotaAsistenciaEstudianteRoutingModule, NgbModule,FormsModule
  ]
})
export class NotaAsistenciaEstudianteModule { }
