import { Component, OnInit } from '@angular/core';
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
    trigger('scrollAnimation', [
      state('show', style({
        left: 50,
        width:90
      })),
      state('hide', style({
        left: 50,
        width: 0
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public links: any;
  public colors: any;
  public target: any;

  public isMouseover = false;
  public animationOver: any;

  public state: any;

  constructor() {

  }

  ngOnInit() {
    this.state = 'hide';

  }

  /*function mouseenterFunc() {

    if (!this.parentNode.classList.contains("active")) {
  
      for (let i = 0; i < this.links.length; i++) {
        if (this.links[i].parentNode.classList.contains("active")) {
          this.links[i].parentNode.classList.remove("active");
        }
        this.links[i].style.opacity = "0.25";
      }
  
      this.parentNode.classList.add("active");
      this.style.opacity = "1";
  
      const width = this.getBoundingClientRect().width;
      const height = this.getBoundingClientRect().height;
      const left = this.getBoundingClientRect().left;
      const top = this.getBoundingClientRect().top;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
  
      this.target.style.width = `${width}px`;
      this.target.style.height = `${height}px`;
      this.target.style.left = `${left}px`;
      this.target.style.top = `${top}px`;
      this.target.style.borderColor = color;
      this.target.style.transform = "none";
    }
  }
  */
  
  
  onMouseOver(){
    console.log('Mouserover Activo');
    this.state = 'show';
  }

  onMouseOut(){
    this.state = 'hide';
  }


}
