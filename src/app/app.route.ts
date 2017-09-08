import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: TheeComponent, data: {title: 'Heroes List'}},
  {
    path: '',
    redirectTo: '/one',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];
