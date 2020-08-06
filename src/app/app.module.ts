import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//views
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
//librerias
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorComponent } from './views/error/error.component';
import { MapaComponent } from './mapa/mapa.component';
import { ListasOfertasLaboralesComponent } from './listas-ofertas-laborales/listas-ofertas-laborales.component';
import { ItemListaComponentComponent } from './item-lista-component/item-lista-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ErrorComponent,
    MapaComponent,
    ListasOfertasLaboralesComponent,
    ItemListaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
