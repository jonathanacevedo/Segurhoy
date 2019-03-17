import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { discoverDirectives } from '@angular/core/src/render3/context_discovery';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  fillContact(){

    //Validaciones de Campos
    swal("Listo!", "Te contactaremos lo antes posible", "success");

  }
}
