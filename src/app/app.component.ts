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

  constructor(private ubiServi: UbicacionService){}

  title = 'jobFind';
  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.lol = this.ubiServi.Locations.subscribe((position:any) =>{
      console.log(position.coords);
      this.posi = [position.latitude, position.longitude];
    });
  }
 

}
