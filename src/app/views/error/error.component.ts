import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  UbicacionObt:any;
  position:any = null;
 /*  constructor(private ubiServi:UbicacionService) {
    this.UbicacionObt = ubiServi.Locations.subscribe({
      next(position: any ){
        console.log(position.coords);
        this.position = [position.coords.latitude, position.coords.longitude];
        console.log(this.position);

      },
      error(msg){
        console.log(msg);
      }
    });
  } */
 
  ngOnInit(): void {
    /* this.UbicacionObt = this.ubiServi.Ubicacion; */
  }
}
