import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import swal from 'sweetalert';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: [
    trigger('show-contact', [
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
export class ContactoComponent implements OnInit {

  public title: string = 'Acá Estamos';
  public lat: number = 4.637908108388191;
  public lng: number = -74.07700025018516;

  public stateContact : string = "hide";


  constructor() { }

  ngOnInit(){}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {   
    console.log(window.pageYOffset);
    if (window.pageYOffset > 2980) {
      this.stateContact = "show";
    }
  }



  fillContact() {
    //Realizar validación de datos
    swal("Listo!", "Te contactaremos lo antes posible", "success");

  }
}
