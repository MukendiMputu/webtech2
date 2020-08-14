import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // use as html element in /src/app/index.html to locate this component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ToDo';
}
