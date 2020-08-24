import { Component, OnInit } from '@angular/core';
import { AvisosTrabajosService } from '../../services/avisos-trabajos.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  geoPosition = null;
  avisos: any = null;

  mostrarUbicacion(): void{
    console.log(this.geoPosition);
  }
  constructor(private avisosService: AvisosTrabajosService) {
    this.getUserPosition();
    this.obtenerListaAvisos();
  }
  ngOnInit(): void {
    console.log('soy inicio', this.geoPosition);
  }

  // tslint:disable-next-line: typedef
  obtenerListaAvisos(){
    this.avisosService.getListaAvisosTrabajos().snapshotChanges().pipe(
      map(changes =>
        changes.map( c =>
          ({key: c.payload.doc.id, ...c.payload.doc.data()  })
        )
      )
    ).subscribe(avisos =>{
      this.avisos = avisos;
    });
  }

  // tslint:disable-next-line: typedef
  async getUserPosition() {
    if (window.navigator.geolocation) {
      this.geoPosition = await window.navigator.geolocation
      .getCurrentPosition(position => this.geoPosition = [position.coords.longitude , position.coords.latitude] );
     }
     else{
       alert('No es posible obtener tú ubicación, debido a que tu navegador no es compatible');
     }
  }
}
