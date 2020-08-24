import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  ubicacion: any;
  ubicacionChange: Subject <any> = new Subject<any>();
  constructor() {
    this.ubicacionChange.subscribe((value){
      this.ubicacion = value;
    });
  }
  async actualizarUbicacion(){
    if (window.navigator.geolocation) {
      const lol = await window.navigator.geolocation
      .getCurrentPosition(position => this.ubicacionChange.next([position.coords.longitude , position.coords.latitude]) );
      console.log(lol);
    }
     else{
       alert('No es posible obtener tú ubicación, debido a que tu navegador no es compatible');
     }
  }
}
