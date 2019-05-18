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
  public subtitle: string;
  public text: string;
  public content: any;
  public br: any;
  public brsub: any;
  public imagen: any;
  public h3: any;
  public div: any;
  public p: any;
  public h1: any;

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
        this.subtitle = "Elige la mejor opción para tí:"
        this.text = "- Seguro de Vida " +
          "\n - Seguro de Exequias " +
          "\n - Seguro de Accidentes Personales " +
          "\n - Seguro Colectivo de Vida " +
          "\n - Plan Credito Protegido ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-family.png";
        break;
      case 'health':
        this.title = "ASEGURA TU SALUD";
        this.subtitle = "¿Qué te ofrecemos?";
        this.text = "- Salud Global " +
          "\n - Salud Clásico " +
          "\n - Salud Evoluciona " +
          "\n - Plan Complementario " +
          "\n - Seguro de Enfermedades Graves ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-salud.png";
        break;
      case 'house':
        this.title = "ASEGURA TU VIVIENDA";
        this.subtitle = "Elige la mejor opción para ti";
        this.text = "- Plan Hogar Sura " +
          "\n - Plan Hogar Global " +
          "\n - Plan Hogar Clásico " +
          "\n - Plan Hogar Básico " +
          "\n - Seguro de Arrendamiento ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-vivienda.png";
        break;
      case 'mobility':
        this.title = "ASEGURA TU MOVILIDAD";
        this.subtitle = "¿Qué te ofrecemos?";
        this.text = "- Plan Conduce Mejor " +
          "\n - Plan Auto Global " +
          "\n - Plan Auto Clásico " +
          "\n - Plan Auto Básico " +
          "\n - Seguro de Moto " +
          "\n - Seguro de Bicicleta " +
          "\n - Seguro Obligatorio SOAT  " +
          "\n - Vehiculo Utilitario y Pesado " +
          "\n - Plan Carros Electricos ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-auto.png";
        break;
      case 'heritage':
        this.title = "SEGUROS PARA BIENES Y PATRIMONIO";
        this.subtitle = "¿Qué te ofrecemos?";
        this.text = "- Equipo Electronico " +
          "\n - Incendio " +
          "\n - Multirriesgo Copropiedades " +
          "\n - Multirriesgo Corporativo " +
          "\n - Multirriesgo Empresarial " +
          "\n - Plan Empresa Protegida " +
          "\n - Plan Empresario SURA  " +
          "\n - Rotura de Maquinaria " +
          "\n - Sustración de Establecimientos ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-edificio.png";
        break;
      case 'employees':
        this.title = "SEGUROS PARA EMPLEADOS";
        this.subtitle = "Te Ofrecemos Soluciones";
        this.text =  "- Autos Colectivos " +
          "\n - Vida Grupo y Vida Deudores " +
          "\n - Salud Colectivo " +
          "\n - Hogar Colectivo " +
          "\n - Multirriesgo Empresarial " +
          "\n - Excequial ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-empleados.png";
        break;
      case 'others':
        this.title = "OTROS SEGUROS";
        this.subtitle = "Te Ofrecemos";
        this.text = "- Profesionales en Salud " +
          "\n - Profesionales Veterinarios " +
          "\n - Responsabilidad Civil Familiar " +
          "\n - Embarcaciones Recreo " +
          "\n - Protección Digital " +
          "\n - Energía Solar ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-doctor.png";
        break;
      case 'arl':
        this.title = "ARL";
        this.subtitle = "Te Ofrecemos"
        this.text = "- Administradora de Riesgos Profesionales ";
        this.imagen = document.createElement("img");
        this.imagen.src = "../../assets/images/icono-arl.png";
        break;
    }

    // this.elem = <HTMLDivElement>(document.createElement('div'));

    // this.elem.style.color = 'red;'

    this.content = document.createElement('div');
    this.br = document.createElement('br');
    this.brsub = document.createElement('br');
    this.h3 = document.createElement('h3');
    this.div = document.createElement('div');
    this.p = document.createElement('p');
    this.h1 = document.createElement('h1');

    this.h3.textContent = this.title+'\n';
    this.h3.style.color = '#f38c3d';
    this.h3.style.fontFamily = 'OswaldExtraLight';
    
    
    this.h1.textContent = this.subtitle;
    this.h1.style.color = '#708090';
    this.h1.style.fontSize = '1.3rem';
    

    this.p.textContent = this.text;
    this.p.style.whiteSpace = 'pre-line';
    this.p.style.color = '#708090';
    this.p.style.fontSize = "1.2rem";
    this.p.style.fontFamily = 'OswaldExtraLight';
    
    this.div.appendChild(this.imagen);

    this.content.appendChild(this.h3);
    this.content.appendChild(this.brsub);
    this.content.appendChild(this.h1);
    this.content.appendChild(this.br);
    this.content.appendChild(this.p);
    this.content.appendChild(this.br);
    this.content.appendChild(this.div);


    swal({
      title: '',
      text: '',
      dangerMode: false,
      content: this.content
    });
  }

}
