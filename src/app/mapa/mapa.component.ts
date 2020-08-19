import { Component, OnInit, Input } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  Map: Mapboxgl.Map;
  @Input() center: Geolocation;
  constructor() {}
  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.Map = new Mapboxgl.Map({
      container: 'mapa-trabajo',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.5, 50.5],
      zoom: 5,
    });
    this.Map.boxZoom.disable();
    this.Map.scrollZoom.disable();
    this.Map.doubleClickZoom.disable();
    const marker = new Mapboxgl.Marker()
      .setLngLat([30.5, 50.5])
      .addTo(this.Map);
  }
}
