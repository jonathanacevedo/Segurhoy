import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public title: string = 'Acá Estamos';
  public lat: number = 4.637908108388191;
  public lng: number = -74.07700025018516;

  public imagen: any;

  constructor() { }

  ngOnInit() {
  }


  fillContact() {

    //Realizar validación de datos
    swal("Listo!", "Te contactaremos lo antes posible", "success");

  }
}
