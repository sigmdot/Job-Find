import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private ubicacion: any;
  private locations = new Observable((observer) => {
    let watchId: number;
    if(navigator.geolocation){
      watchId = navigator.geolocation.watchPosition((position) => {
        observer.next(position);
      },(error: PositionError) => {
        observer.error(error);
      });
    }else{
      observer.error('No locación admitida.');
    }
  });
  constructor(){
    this.locations;
  }
  get Ubicacion(){
    return this.ubicacion;
  }
  get Locations(){
    return this.locations;
  }
}
