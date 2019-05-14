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

  public stateServices : string = "hide";
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


  showModal(){
    this.imagen= document.createElement("img");
    this.imagen.src = "https://img.icons8.com/color/2x/family.png";

    swal({
 
      title: "Are you sure?",
      text: "Are you sure that you want to leave this page?",
      dangerMode: false,
      content: this.imagen
    });
  }

}
