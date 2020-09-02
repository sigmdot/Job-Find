import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup,  FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario-datos-personales',
  templateUrl: './formulario-datos-personales.component.html',
  styleUrls: ['./formulario-datos-personales.component.scss']
})
export class FormularioDatosPersonalesComponent implements OnInit {
  formDatosPersonales = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    region: new FormControl(''),
    comuna: new FormControl(''),
    telefono: new FormControl(''),
    sobreMi: new FormControl('')
  });
  constructor() { }
  ngOnInit(): void {}

}
