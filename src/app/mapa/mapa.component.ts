import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit, OnChanges {
  Map: Mapboxgl.Map = null;
  marker: Mapboxgl.Marker;
  @Input() center: Geolocation;
  type = typeof this.center;
  constructor() { }
  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if ((typeof changes.center.currentValue !== "undefined") && (changes.center.currentValue !== null)) {
      if (this.Map === null) {
        Mapboxgl.accessToken = environment.mapboxKey;
        this.Map = new Mapboxgl.Map({
          container: 'mapa-trabajo',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: changes.center.currentValue,
          zoom: 13,
        });
        this.Map.boxZoom.disable();
        this.Map.scrollZoom.disable();
        this.Map.doubleClickZoom.disable();
        this.marker = new Mapboxgl.Marker()
          .setLngLat(changes.center.currentValue)
          .addTo(this.Map);
      }
      else{
        this.Map.setCenter(changes.center.currentValue);
        this.marker.setLngLat(changes.center.currentValue);
      }
    }

  }
}
