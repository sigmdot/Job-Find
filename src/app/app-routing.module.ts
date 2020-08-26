import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { UltimosTrabajosComponent } from './views/ultimos-trabajos/ultimos-trabajos.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { RegistroComponent } from './views/registro/registro.component';
import { LandingComponent } from './views/landing/landing.component';
import { UltimosTrabajosSolicitadosComponent } from './views/ultimos-trabajos-solicitados/ultimos-trabajos-solicitados.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'ultimostrabajos',
    component:UltimosTrabajosComponent
  },
  {
    path:'perfil',
    component:UserProfileComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'trabajosolicitados',
    component:UltimosTrabajosSolicitadosComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
