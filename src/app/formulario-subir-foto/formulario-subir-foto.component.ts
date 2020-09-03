import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-subir-foto',
  templateUrl: './formulario-subir-foto.component.html',
  styleUrls: ['./formulario-subir-foto.component.scss']
})
export class FormularioSubirFotoComponent implements OnInit {
  url = null;
  selectedFiles: FileList;

  formFoto = new FormGroup({
    file: new FormControl(null, Validators.required)
  });

  constructor() { }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.formFoto.patchValue({
        file: event.target.files[0]
      });
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.formFoto.value);
      }
    }
  }
  ngOnInit(): void {
  }

}
