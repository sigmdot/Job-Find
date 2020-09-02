import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormularioRegistroComponent } from 'src/app/formulario-registro/formulario-registro.component';
import { FormularioDatosPersonalesComponent } from 'src/app/formulario-datos-personales/formulario-datos-personales.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  @ViewChild(FormularioRegistroComponent) pasoUno: FormularioRegistroComponent;
  
  @ViewChild(FormularioDatosPersonalesComponent) pasoDos: FormularioDatosPersonalesComponent;


  // tslint:disable-next-line: typedef
  get FormpasoUno(){
    return this.pasoUno ? this.pasoUno.formularioRegistro : null;
  }
  // tslint:disable-next-line: typedef
  get FormpasoDos(){
    return this.pasoDos ? this.pasoDos.formDatosPersonales : null;
  }
  constructor(private fb: FormBuilder) { }

  lol(){
    console.log(this.FormpasoUno.value);  
  }
  lol2(){
    console.log(this.FormpasoDos.value);  
  }

  ngOnInit(): void { 
  }

}
