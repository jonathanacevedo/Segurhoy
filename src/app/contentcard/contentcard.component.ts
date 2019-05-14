import { Component, OnInit, HostListener } from '@angular/core';
import swal from 'sweetalert';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrls: ['./contentcard.component.css'],
  animations: [
    trigger('show-services', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('hide => show', animate('500ms ease-out')),
      transition('show => hide', animate('500ms ease-in')),
    ])
  ]
})
export class ContentcardComponent implements OnInit {

  public stateServices: string = "hide";

  public title: string;
  public text: string;
  public imagen: any;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {

    if (window.pageYOffset > 900) {
      this.stateServices = "show";
    }
  }

  ngOnInit() {
  }


  showModal(type: string) {

    switch (type) {
      case 'life':
        this.title = "ASEGURA TU VIDA";
        this.text = "Elige la mejor opción para ti: " +
          "\n * Seguro de Vida " +
          "\n * Seguro de Exequias " +
          "\n * Seguro de Accidentes Personales " +
          "\n * Seguro Colectivo de Vida " +
          "\n * Plan Credito Protegido ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/family.png";
        break;
      case 'health':
        this.title = "ASEGURA TU SALUD";
        this.text = "¿Qué te ofrecemos?" +
          "\n * Salud Global " +
          "\n * Salud Clásico " +
          "\n * Salud Evoluciona " +
          "\n * Plan Complementario " +
          "\n * Seguro de Enfermedades Graves ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/rod-of-asclepius.png";
        break;
      case 'house':
        this.title = "ASEGURA TU VIVIENDA";
        this.text = "Elige la mejor opción para ti" +
          "\n * Plan Hogar Sura " +
          "\n * Plan Hogar Global " +
          "\n * Plan Hogar Clásico " +
          "\n * Plan Hogar Básico " +
          "\n * Seguro de Arrendamiento ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/home.png";
        break;
      case 'mobility':
        this.title = "ASEGURA TU MOVILIDAD";
        this.text = "¿Qué te ofrecemos?" +
          "\n * Plan Conduce Mejor " +
          "\n * Plan Auto Global " +
          "\n * Plan Auto Clásico " +
          "\n * Plan Auto Básico " +
          "\n * Seguro de Moto " +
          "\n * Seguro de Bicicleta " +
          "\n * Seguro Obligatorio SOAT  " +
          "\n * Vehiculo Utilitario y Pesado " +
          "\n * Plan Carros Electricos ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/ground-transportation.png";
        break;
      case 'heritage':
        this.title = "SEGUROS PARA BIENES Y PATRIMONIO";
        this.text = "¿Qué te ofrecemos?" +
          "\n * Equipo Electronico " +
          "\n * Incendio " +
          "\n * Multirriesgo Copropiedades " +
          "\n * Multirriesgo Corporativo " +
          "\n * Multirriesgo Empresarial " +
          "\n * Plan Empresa Protegida " +
          "\n * Plan Empresario SURA  " +
          "\n * Rotura de Maquinaria " +
          "\n * Sustración de Establecimientos ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/apartment.png";
        break;
      case 'employees':
        this.title = "SEGUROS PARA EMPLEADOS";
        this.text = "Te Ofrecemos Soluciones" +
          "\n * Autos Colectivos " +
          "\n * Vida Grupo y Vida Deudores " +
          "\n * Salud Colectivo " +
          "\n * Hogar Colectivo " +
          "\n * Multirriesgo Empresarial " +
          "\n * Excequial ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/road-worker.png";
        break;
      case 'others':
        this.title = "OTROS SEGUROS";
        this.text = "Te Ofrecemos" +
          "\n * Profesionales en Salud " +
          "\n * Profesionales Veterinarios " +
          "\n * Responsabilidad Civil Familiar " +
          "\n * Embarcaciones Recreo " +
          "\n * Protección Digital " +
          "\n * Energía Solar ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/doctor-female.png";
        break;
      case 'arl':
        this.title = "ARL";
        this.text = "Te Ofrecemos" +
          "\n * Administradora de Riesgos Profesionales ";
        this.imagen = document.createElement("img");
        this.imagen.src = "https://img.icons8.com/ultraviolet/2x/collaborator-male.png";
        break;
    }

    swal({
      title: this.title,
      text: this.text,
      dangerMode: false,
      content: this.imagen
    });
  }

}
