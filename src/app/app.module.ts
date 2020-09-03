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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//prueba
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//backend
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {environment} from '../environments/environment';
import { ModalDetallesAvisoComponent } from './modal-detalles-aviso/modal-detalles-aviso.component';
import { MapaDetalleComponent } from './mapa-detalle/mapa-detalle.component';
import { LandingComponent } from './views/landing/landing.component';
import { UltimosTrabajosSolicitadosComponent } from './views/ultimos-trabajos-solicitados/ultimos-trabajos-solicitados.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormularioSubirFotoComponent } from './formulario-subir-foto/formulario-subir-foto.component';
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
    FormularioDatosPersonalesComponent,
    ModalDetallesAvisoComponent,
    MapaDetalleComponent,
    LandingComponent,
    UltimosTrabajosSolicitadosComponent,
    FormularioSubirFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: SETTINGS, useValue:{} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
