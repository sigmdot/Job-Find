import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  position = {latitude:-28.90,longitud:29.4}
  geoPosition;
  mostrarUbicacion(){
    console.log(this.geoPosition);
  }
  constructor() {
    console.log('lol');
    this.getUserPosition();
    console.log(this.geoPosition);
  }
  ngOnInit(): void {
    console.log('soy inicio',this.geoPosition)
  }
  async getUserPosition(){
    if (window.navigator.geolocation) {
      this.geoPosition= await window.navigator.geolocation
      .getCurrentPosition(position => this.geoPosition = position);
     }
     else{
       alert('No es posible obtener tú ubicación, debido a que tu navegador no es compatible');
     }
  }
}
