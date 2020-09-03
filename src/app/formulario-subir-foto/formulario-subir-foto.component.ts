import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-subir-foto',
  templateUrl: './formulario-subir-foto.component.html',
  styleUrls: ['./formulario-subir-foto.component.scss']
})
export class FormularioSubirFotoComponent implements OnInit {
  url = null;
  formFoto = new FormGroup({
    file: new FormControl(null, Validators.required)
  });
  constructor() { }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.formFoto.patchValue({
          file: reader.result
        });
        console.log(this.formFoto.value);
      }
    }
  }
  ngOnInit(): void {
  }

}
