import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-subir-foto',
  templateUrl: './formulario-subir-foto.component.html',
  styleUrls: ['./formulario-subir-foto.component.scss']
})
export class FormularioSubirFotoComponent implements OnInit {
  url = null;
  constructor() { }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  ngOnInit(): void {
  }

}
