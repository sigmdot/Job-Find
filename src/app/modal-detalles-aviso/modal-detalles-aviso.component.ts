import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-detalles-aviso',
  templateUrl: './modal-detalles-aviso.component.html',
  styleUrls: ['./modal-detalles-aviso.component.scss']
})
export class ModalDetallesAvisoComponent implements OnInit {
  geoPox = null;
  constructor() {}

  ngOnInit(): void {
    this.geoPox = [-71.231, -33.555];
  }

}
