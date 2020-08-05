import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.sass']
})
export class MapaComponent implements OnInit {
  Map: Mapboxgl.Map;
  constructor() { }

  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.Map = new Mapboxgl.Map({
      container: 'mapa-trabajo',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.04, 38.907],
      zoom: 11.15
    });
  }

}
