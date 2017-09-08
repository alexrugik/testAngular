import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  ids: number[] = [1, 2, 3, 4, 5];
  checked: boolean = true;

  constructor() {
  }
}
