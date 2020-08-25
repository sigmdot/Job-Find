import { Component, OnInit, Input } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-mapa-detalle',
  templateUrl: './mapa-detalle.component.html',
  styleUrls: ['./mapa-detalle.component.scss']
})
export class MapaDetalleComponent implements OnInit {
  Map: Mapboxgl.Map = null;
  marker: Mapboxgl.Marker;
  @Input() center: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.center,' washo soy el mapa detalle, perdón :c');
    Mapboxgl.accessToken = environment.mapboxKey;
    this.Map = new Mapboxgl.Map({
      container: 'mapa-detalle',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 13
    });
    this.Map.boxZoom.disable();
    this.Map.scrollZoom.disable();
    this.Map.doubleClickZoom.disable();
    this.marker = new Mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.Map);
  }

}
