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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('animation-1', [
      state('show-1', style({
        left: '5%',
        width: '70%',
        opacity: 100
      })),
      state('hide-1', style({
        left: '50%',
        width: '0%',
        opacity: 0
      })),
      transition('show-1 => hide-1', animate('500ms ease-out')),
      transition('hide-1 => show-1', animate('500ms ease-in')),
    ]),
    trigger('animation-2', [
      state('show-2', style({
        left: '5%',
        width: '70%',
        opacity: 100
      })),
      state('hide-2', style({
        left: '50%',
        width: '0%',
        opacity: 0
      })),
      transition('show-2 => hide-2', animate('500ms ease-out')),
      transition('hide-2 => show-2', animate('500ms ease-in')),
    ]),
    trigger('animation-3', [
      state('show-3', style({
        left: '5%',
        width: '70%',
        opacity: 100
      })),
      state('hide-3', style({
        left: '50%',
        width: '0%',
        opacity: 0
      })),
      transition('show-3 => hide-3', animate('500ms ease-out')),
      transition('hide-3 => show-3', animate('500ms ease-in')),
    ]),
    trigger('animation-4', [
      state('show-4', style({
        left: '5%',
        width: '70%',
        opacity: 100,
      })),
      state('hide-4', style({
        left: '50%',
        width: '0%',
        opacity: 0,
      })),
      transition('show-4 => hide-4', animate('500ms ease-out')),
      transition('hide-4 => show-4', animate('500ms ease-in')),
    ]),
    trigger('animation-5', [
      state('show-5', style({
        left: '5%',
        width: '70%',
        opacity: 100
      })),
      state('hide-5', style({
        left: '50%',
        width: '0%',
        opacity: 0
      })),

      transition('show-5 => hide-5', animate('500ms ease-out')),
      transition('hide-5 => show-5', animate('500ms ease-in')),
    ]),
    trigger('moveHeader', [
      state('maxSize', style({
        width: '50%',
        transform: "translateX(10%)"
      })),
      state('minSize', style({
        width: '40%',
        transform: "translateX(-40%)"
      })),
      transition('maxSize => minSize', animate('500ms ease-out')),
      transition('minSize => maxSize', animate('500ms ease-in')),
    ]),
    trigger('moveInfoHeader', [
      state('up-bar', style({
        margin: '20px'
      })),
      state('down-bar', style({
        margin: '0px'
      })),
      transition('up-bar => down-bar', animate('500ms ease-out')),
      transition('down-bar => up-bar', animate('500ms ease-in')),
    ]),
    trigger('resizeHeader', [
      state('state-header-1', style({
        height: '94px',
      })),
      state('state-header-2', style({
        height: '90px',
      })),
      transition('state-header-1 => state-header-2', animate('500ms ease-out')),
      transition('state-header-2 => state-header-1', animate('500ms ease-in')),
    ])
  ],
})
export class HeaderComponent implements OnInit {

  public links: any;
  public colors: any;
  public target: any;

  public isMouseover = false;
  public animationOver: any;

  public state: any;
  public stateInfo: any;
  public stateH: any;
  public state1: any;
  public state2: any;
  public state3: any;
  public state4: any;
  public state5: any;

  constructor(public el: ElementRef, @Inject(DOCUMENT) document) {

  }

  ngOnInit() {
    this.initStates();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScrollPage(e) {
    console.log("Valor del scroll: " + window.pageYOffset)
    if (window.pageYOffset > 0 && window.pageYOffset < 640) {
      console.log("En la condición!");
      this.state1 = 'show-1';
    }
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    console.log("Valor del Scroll : " + window.pageYOffset);

    if (window.pageYOffset > 110) {
      this.state = "minSize";
      this.stateInfo = "down-bar";
    } else {
      this.state = "maxSize";
      this.stateInfo = "up-bar";
    }

    // if (window.pageYOffset > 130) {
    //   this.stateH = "state-header-2";
    // } else {
    //   this.stateH = "state-header-1";
    // }
  }

  onMouseOver(element: any) {

    switch (element) {
      case '1':
        this.state1 = 'show-1';
        break;
      case '2':
        this.state2 = 'show-2';
        break;
      case '3':
        this.state3 = 'show-3';
        break;
      case '4':
        this.state4 = 'show-4';
        break;
      case '5':
        this.state5 = 'show-5';
        break;
    }

  }

  onMouseOut(element: any) {

    switch (element) {
      case '1':
        this.state1 = 'hide-1';
        break;
      case '2':
        this.state2 = 'hide-2';
        break;
      case '3':
        this.state3 = 'hide-3';
        break;
      case '4':
        this.state4 = 'hide-4';
        break;
      case '5':
        this.state5 = 'hide-5';
        break;
    }
  }


  irInfo() {
    document.querySelector('#content-card').scrollIntoView({ behavior: 'smooth' });
  }

  initStates() {
    this.state = "maxSize";
    this.stateInfo = "up-bar";
    this.state1 = 'hide-1';
    this.state2 = 'hide-2';
    this.state3 = 'hide-3';
    this.state4 = 'hide-4';
    this.state5 = 'hide-5';

  }
}
