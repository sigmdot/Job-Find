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
import { UltimosTrabajosComponent } from './views/ultimos-trabajos/ultimos-trabajos.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { BannerResumenComponent } from './banner-resumen/banner-resumen.component';
import { TablaHistorialComponent } from './tabla-historial/tabla-historial.component';
import { RegistroComponent } from './views/registro/registro.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioDatosPersonalesComponent } from './formulario-datos-personales/formulario-datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ErrorComponent,
    MapaComponent,
    ListasOfertasLaboralesComponent,
    ItemListaComponentComponent,
    UltimosTrabajosComponent,
    UserProfileComponent,
    BannerResumenComponent,
    TablaHistorialComponent,
    RegistroComponent,
    FormularioRegistroComponent,
    FormularioDatosPersonalesComponent
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
