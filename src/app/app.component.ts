import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-demo';
  show: boolean = true;

  constructor(private router: Router){}


  logout() {    
    this.router.navigate(['/login']);
}
}
