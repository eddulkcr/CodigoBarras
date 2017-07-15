import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs: ['value']
})
export class AppComponent {
  title = 'codigo de Barrass';
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string;
}
