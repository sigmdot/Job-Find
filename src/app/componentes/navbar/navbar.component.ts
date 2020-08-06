import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faClock,
  faToolbox,
  faUser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faClock = faClock;
  faToolbox = faToolbox;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  constructor() { }
  logOut(){
    console.log('Te quieres salir?')
  }
  ngOnInit(): void {
  }

}
