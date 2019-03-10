import { Component, OnInit, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]),
    trigger('moveHeader', [
      state('maxSize', style({
        left: '5%',
        width: '70%',
        opacity: 100
      })),
      state('minSize', style({
        opacity: 0
      })),
      transition('maxSize => minSize', animate('500ms ease-out')),
      transition('minSize => maxSize', animate('500ms ease-in')),
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'maxSize'

  isVisible: boolean = false;


  constructor(public el: ElementRef, @Inject(DOCUMENT) document) { }




  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   if (window.pageYOffset > 110) {
  //     let element = document.getElementById('image-header');
  //     element.classList.remove('image-header');
  //     element.classList.add('image-header-down');
  //   } else {
  //     let element = document.getElementById('image-header');
  //     element.classList.remove('image-header-down');
  //     element.classList.add('image-header');
  //   }
  // }


  // @HostListener('window:scroll', ['$event'])
  // checkScroll(event) {
  //   const componentPosition = this.el.nativeElement.offsetTop;
  //   const scrollPosition = window.pageYOffset;

  //   if (scrollPosition >= 120) {
  //     console.log("Pequeño...");
  //     this.isVisible = true;
  //     this.state = 'minSize';

  //   } else {
  //     console.log("Grande...");
  //     this.isVisible = false;
  //     this.state = 'maxSize';

  //   }

  // }


  irInfo() {
    document.querySelector('#info').scrollIntoView({ behavior: 'smooth' });
  }

  irMision() {
    document.querySelector('#mision').scrollIntoView({ behavior: 'smooth' });
  }

  irVision() {
    document.querySelector('#vision').scrollIntoView({ behavior: 'smooth' });
  }

  irContacto() {
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
  }


  ngOnInit() {
    this.state = "minSize";
    // let element = document.getElementById('info');
    // element.classList.add('sticky');
  }

}
