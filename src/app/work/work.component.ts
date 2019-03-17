import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [
    trigger('show-works', [
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
export class WorkComponent implements OnInit {

  public stateWorks : string = "hide";

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {   

    if (window.pageYOffset > 1700) {
      this.stateWorks = "show";
    }
  }

  ngOnInit() {
  }

}
