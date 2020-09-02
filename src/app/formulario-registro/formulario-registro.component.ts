import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss']
})
export class FormularioRegistroComponent implements OnInit {
  formularioRegistro: FormGroup;
  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      correo: new FormControl('', [Validators.required,]),
      correoConf: new FormControl('', Validators.required),
      rut: new FormControl('', Validators.required),
      nDoc: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.minLength(7)),
      passConf: new FormControl('', Validators.required)
    }, { validators: this.formValidator });
  }
  get f(){
    return this.formularioRegistro.controls;
  }
  constructor(private fb: FormBuilder) { }
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


}
