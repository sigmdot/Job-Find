import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  position = {latitude:-28.90,longitud:29.4}
  geoPosition = null;
  mostrarUbicacion(){
    console.log(this.geoPosition);
  }
  constructor() {
    this.getUserPosition();
  }
  ngOnInit(): void {
    console.log('soy inicio',this.geoPosition)
  }
  async getUserPosition(){
    if (window.navigator.geolocation) {
      this.geoPosition= await window.navigator.geolocation
      .getCurrentPosition(position => this.geoPosition = [position.coords.longitude , position.coords.latitude] );
     }
     else{
       alert('No es posible obtener tú ubicación, debido a que tu navegador no es compatible');
     }
  }
}
