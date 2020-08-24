import { Component, OnInit } from '@angular/core';
import { UbicacionService } from './services/ubicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lol: any;
  posi: any = null;

  constructor(private ubiServi: UbicacionService){
    this.lol = ubiServi.Locations.subscribe({
      next(position: any ){
        console.log(position.coords);
        this.posi = [position.coords.latitude, position.coords.longitude];
      },
      error(msg){
        console.log(msg);
      }
    });
    
  }

  
  
  title = 'jobFind';
  // tslint:disable-next-line: typedef
  ngOnInit(){}
 

}
