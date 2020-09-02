import { Component, OnInit } from '@angular/core';
import {  Router , NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentRoute: any;
  constructor(private router: Router){
    router.events.subscribe( (event) =>{
      console.log(event);
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url;
      }
    });
  }
  title = 'jobFind';
  ngOnInit(): void {}

}
