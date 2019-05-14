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
    ]),
    trigger('show-company', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0.5,
      })),
      transition('hide => show', animate('500ms ease-out')),
      transition('show => hide', animate('500ms ease-in')),
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'maxSize';
  public stateCompany: any = "hide";
  isVisible: boolean = false;


  constructor(public el: ElementRef, @Inject(DOCUMENT) document) { }


  ngOnInit() {
    this.state = "minSize";
  }

}
