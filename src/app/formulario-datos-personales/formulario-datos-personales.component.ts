import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup,  FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario-datos-personales',
  templateUrl: './formulario-datos-personales.component.html',
  styleUrls: ['./formulario-datos-personales.component.scss']
})
export class FormularioDatosPersonalesComponent implements OnInit {
  opcionesRegion =[
    {
      value: 1,
      name: 'I - Tarapacá'
    },
    {
      value: 2,
      name: 'II - Antofagasta'
    },
    {
      value: 3,
      name: 'III - Atacama'
    },
    {
      value: 4,
      name: 'IV - Coquimbo'
    },
    {
      value: 5,
      name: 'V - Valparaíso'
    },
    {
      value: 6,
      name: "VI - Libertador Bernardo O'Higgins"
    },
    {
      value: 7,
      name: 'VII - Maule'
    },
    {
      value: 8,
      name: 'VIII - Concepción'
    },
    {
      value: 9,
      name: 'IX - Araucanía'
    }

  ]
  formDatosPersonales = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    region: new FormControl(''),
    telefono: new FormControl(''),
    sobreMi: new FormControl('')
  });
  constructor() { }
  ngOnInit(): void {}

}
