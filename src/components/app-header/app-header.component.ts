import {
  Component,
} from '@angular/core';

interface TabConfig {
  label: string;
  routerLink: string;
}

const tabsConfig: TabConfig[] = [
  {label: 'One', routerLink: 'one'},
  {label: 'Two', routerLink: 'two'},
  {label: 'Three', routerLink: 'three'},
];

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  public tabsConfig: TabConfig[] = tabsConfig;

  constructor() {
  }
}
