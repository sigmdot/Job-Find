import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { isValid } from 'validate-rut-serie';
@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {
  formularioRegistro: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required, ]),
    correoConf: new FormControl('', Validators.required),
    rut: new FormControl('', Validators.required),
    nDoc: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.minLength(7)),
    passConf: new FormControl('', Validators.required)
  }, { validators: [this.formValidator/* , this.tellIfIsValid */] });
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  get f() {
    return this.formularioRegistro.controls;
  }
  constructor(private fb: FormBuilder, private toastr: ToastrService) { }
  // tslint:disable-next-line: typedef
  formValidator(g: FormGroup) {
    // tslint:disable-next-line: max-line-length
    if ((g.get('pass').value != null) && (g.get('correo').value != null) && (g.get('passConf').value != null) && (g.get('correoConf').value != null)) {
      if (((g.get('pass').value) === (g.get('passConf').value)) && ((g.get('correo').value) === (g.get('correoConf').value))) {
        return null;
      }
    }
    return { datosEnNulo: true };
  }
  
  // tslint:disable-next-line: typedef
  lol() {
    const correo = this.formularioRegistro.value.correo;
    const correoConfi = this.formularioRegistro.value.correoConf;
    const pass = this.formularioRegistro.value.pass;
    const passConfi = this.formularioRegistro.value.passConf;
    const rut = this.formularioRegistro.value.rut;

    if (correo !== ''){
      if ( correo !== correoConfi){
        this.toastr.error('Datos no coincidentes', 'Error en el correo');
      }
    }
    else{
      this.toastr.warning('Dato necesario', 'Correo no escrito');
    }
    if (pass !== ''){
      if ( pass !== passConfi){
        this.toastr.error('Datos no coincidentes', 'Error en la contraseña');
      }
    }
    else{
      this.toastr.warning('Dato necesario', 'Contraseña no escrita', {
        timeOut: 2500
      });
    }
    if (rut !== ''){
      this.toastr.success('Dato necesario', 'RUT ingresado', {
        timeOut: 2500
      });
    }
  }
  // tslint:disable-next-line: typedef
  async tellIfIsValid() {
    const lol = await isValid({rut: '19776980-7', serie: '110027201'}) ;
    console.log(lol);
    if (lol === true){
      console.log('JAJAJAJ')
      return null;
    }
    else{
      console.log('Lol :c');
      return { no: false};
    }
  }



}
