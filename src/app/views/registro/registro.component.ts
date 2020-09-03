import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormularioRegistroComponent } from 'src/app/formulario-registro/formulario-registro.component';
import { FormularioDatosPersonalesComponent } from 'src/app/formulario-datos-personales/formulario-datos-personales.component';
import {FormularioSubirFotoComponent} from 'src/app/formulario-subir-foto/formulario-subir-foto.component'
import { AuthService } from 'src/app/auth/services/auth.service';
import { CreacionUsuarioService } from 'src/app/services/creacion-usuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @ViewChild(FormularioRegistroComponent) pasoUno: FormularioRegistroComponent;

  @ViewChild(FormularioDatosPersonalesComponent) pasoDos: FormularioDatosPersonalesComponent;

  @ViewChild(FormularioSubirFotoComponent) pasoTres: FormularioSubirFotoComponent;

  // tslint:disable-next-line: typedef
  get FormpasoUno(){
    return this.pasoUno ? this.pasoUno.formularioRegistro : null;
  }
  // tslint:disable-next-line: typedef
  get FormpasoDos(){
    return this.pasoDos ? this.pasoDos.formDatosPersonales : null;
  }
  // tslint:disable-next-line: typedef
  get FormpasoTres(){
    return this.pasoTres ? this.pasoTres.formFoto : null;
  }
  constructor(private fb: FormBuilder, private authSvc: AuthService, private userService: CreacionUsuarioService) { }

  lol(){
    console.log(this.FormpasoUno.value);  
  }
  lol2(){
    console.log(this.FormpasoDos.value);  
  }
  lol3(){
    console.log(this.FormpasoTres.value);  
  }
  registro(){
    this.authSvc.register( this.FormpasoUno.value.correo , this.FormpasoUno.value.pass ).then( (user) => {
      console.log(user.user.uid);
      this.userService.createUser(user.user.uid,this.FormpasoDos);
    });
  }
  ngOnInit(): void { 
  }

}
