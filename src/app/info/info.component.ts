import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('telefonoanimacion', [
      state('show', style({
        opacity: 100
      })),
      state('hide', style({
        opacity: 0.8
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-in')),
    ])
  ]
})

export class InfoComponent implements OnInit {

  public telstate: any;

  constructor() { }

  ngOnInit() {
    this.telstate = "show";
    setInterval(() => {
      if(this.telstate == "show"){
        this.telstate = "hide";
      } else if(this.telstate == "hide") {
        this.telstate = "show";
      }
    }, 500);
  }
}
