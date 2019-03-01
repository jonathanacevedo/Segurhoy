import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'hide'

  isVisible: boolean = false;


  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll(event) {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      console.log("Position de la página: "+componentPosition);
      console.log("Position del scroll: "+scrollPosition);


      if (scrollPosition >= 320) {
        console.log("Valor de isVisible: "+this.isVisible);
        this.isVisible = true;
        this.state = 'show'

      } else {
        console.log("Valor de isVisible: "+this.isVisible);
        this.isVisible = false;
        this.state = 'hide'

      }

    }


  irInfo(){
    document.querySelector('#info').scrollIntoView({ behavior: 'smooth' });
  }

  irMision(){
    document.querySelector('#mision').scrollIntoView({ behavior: 'smooth' });
  }

  irVision(){
    document.querySelector('#vision').scrollIntoView({ behavior: 'smooth' });
  }

  irContacto(){
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
  }


  ngOnInit() {
  }

}
