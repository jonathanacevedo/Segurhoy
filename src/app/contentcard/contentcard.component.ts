import { Component, OnInit, HostListener } from '@angular/core';
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

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {   

    if (window.pageYOffset > 900) {
      this.stateServices = "show";
    }
  }

  ngOnInit() {
  }

}
