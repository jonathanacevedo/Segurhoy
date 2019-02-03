import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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
