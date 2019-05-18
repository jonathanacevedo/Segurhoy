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
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  animations: [
    trigger('show-company', [
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
export class CompanyComponent implements OnInit {

  public stateCompany: any = "hide";

  constructor(public el: ElementRef, @Inject(DOCUMENT) document) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {   
    if (window.pageYOffset > 1780) {
      this.stateCompany = "show";
    }
  }

  ngOnInit() {
  }

}
