import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listas-ofertas-laborales',
  templateUrl: './listas-ofertas-laborales.component.html',
  styleUrls: ['./listas-ofertas-laborales.component.scss'],
})
export class ListasOfertasLaboralesComponent implements OnInit,OnChanges {
  constructor() {}
  @Input() avisosLista: any;

  mostrarModal(): void {}

  ngOnInit(): void {
    console.log(this.avisosLista);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
}
