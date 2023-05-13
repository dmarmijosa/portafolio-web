import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',

})
export class ResumeComponent {

  educacion = [
    [
      'educacion.superior.anio',
      'educacion.superior.titulo',
      'educacion.superior.institucion',
      'educacion.superior.descripcion',
    ],
    [
      'educacion.secundaria.anio',
      'educacion.secundaria.titulo',
      'educacion.secundaria.institucion',
      'educacion.secundaria.descripcion',
    ],
    [
      'educacion.cursos.anio',
      'educacion.cursos.titulo',
      'educacion.cursos.institucion',
      'educacion.cursos.descripcion',
    ],
  ];
  experiencia = [
    [
      false,
      './assets/pdfs/experiences/csa.pdf',
      'experience.csa.fecha',
      'experience.csa.titulo',
      'experience.csa.lugar',
      'experience.csa.descripcion',
    ],
    [
      true,
      './assets/pdfs/experiences/compumars.pdf',
      'experience.compumars.fecha',
      'experience.compumars.titulo',
      'experience.compumars.lugar',
      'experience.compumars.descripcion',
    ],
    [
      true,
      './assets/pdfs/experiences/pc-flash.pdf',
      'experience.pc-flash.fecha',
      'experience.pc-flash.titulo',
      'experience.pc-flash.lugar',
      'experience.pc-flash.descripcion',
    ],
    [
      true,
      './assets/pdfs/experiences/velsystem.pdf',
      'experience.velsystem.fecha',
      'experience.velsystem.titulo',
      'experience.velsystem.lugar',
      'experience.velsystem.descripcion',
    ],
    [
      false,
      './assets/pdfs/experiences/toc.pdf',
      'experience.toc.fecha',
      'experience.toc.titulo',
      'experience.toc.lugar',
      'experience.toc.descripcion',
    ],
    [
      true,
      './assets/pdfs/experiences/unl.pdf',
      'experience.unl.fecha',
      'experience.unl.titulo',
      'experience.unl.lugar',
      'experience.unl.descripcion',
    ],
  ];
  openModal(data:string) {
    Swal.fire({
      title: 'PDF Modal',
      html: `<object data=${data} type="application/pdf" width="100%" height="592px"></object>`,
      showCloseButton: true,
      focusConfirm: true,
      
    })
  }
  
  
}
