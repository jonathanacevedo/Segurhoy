import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public title: string = '¡Acá Estamos!';
  public lat: number = 4.637908108388191;
  public lng: number = -74.07700025018516;

  public imagen: any;

  constructor() { }

  ngOnInit() {
  }


  fillContact() {

    this.imagen= document.createElement("img");
    this.imagen.src = "https://img.icons8.com/color/2x/family.png";

    swal({
 
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      dangerMode: false,
      content: this.imagen
    });


    //Realizar validación de datos
    // swal("Listo!", "Te contactaremos lo antes posible", "success");

  }
}
