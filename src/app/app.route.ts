import {Routes} from '@angular/router';
import {OneComponent} from '../components/one/one.component';
import {TwoComponent} from '../components/two/two.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {ThreeComponent} from '../components/three/three.component';

export const appRoutes: Routes = [
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent, data: {title: 'Heroes List'}},
  {
    path: '',
    redirectTo: '/one',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];
