import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../app/services/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dynamical-enviroment';

  constructor(public srv: ConfigService) {}

  ngOnInit() {
    console.log('Component generate');
  }
}
