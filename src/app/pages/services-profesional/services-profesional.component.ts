import { Component } from '@angular/core';

@Component({
  selector: 'app-services-profesional',
  templateUrl: './services-profesional.component.html',
  styles: [],
})
export class ServicesProfesionalComponent {
  certificados = [
    [
      'certificados.unl.nombre',
      'fa-solid fa-building-columns',
      'certificados.unl.expedicion',
      'certificados.unl.descripcion',
      'https://certificados.unl.edu.ec/titulo/validar/MDAwMDA1Njc4NQ',
    ],
    [
      'certificados.platzi.nombre',
      'fa-brands fa-angular',
      'certificados.platzi.expedicion',
      'certificados.platzi.descripcion',
      'https://platzi.com/p/daniel266735019/ruta/45-desarrollo-angular/diploma/detalle/',
    ],
    [
      'certificados.freecodecamp.nombre',
      'fa-brands fa-free-code-camp',
      'certificados.freecodecamp.expedicion',
      'certificados.freecodecamp.descripcion',
      'https://www.freecodecamp.org/espanol/certification/fcc334e70dc-8a42-41d5-93d1-40e9760818b7/responsive-web-design',
    ],
    [
      'certificados.udemyAngular.nombre',
      'fa-brands fa-angular',
      'certificados.udemyAngular.expedicion',
      'certificados.udemyAngular.descripcion',
      'https://www.udemy.com/certificate/UC-902a0c6b-fcb3-4e5d-aa26-9cd5391b7c4f/',
    ],

    [
      'certificados.udemyNodejs.nombre',
      'fa-brands fa-node',
      'certificados.udemyNodejs.expedicion',
      'certificados.udemyNodejs.descripcion',
      'https://www.udemy.com/certificate/UC-f3d01a4e-61f7-4477-bc0e-17773934a9e9/',
    ],

    [
      'certificados.cadil.nombre',
      'class="fa-regular fa-language',
      'certificados.cadil.expedicion',
      'certificados.cadil.descripcion',
      './assets/pdfs/licencias-certificados/ingles.pdf',
    ],
  ];
}
