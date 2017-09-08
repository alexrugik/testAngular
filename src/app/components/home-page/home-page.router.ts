import {Routes} from '@angular/router';
import {OneComponent} from '../one/one.component';
import {TwoComponent} from '../two/two.component';
import {ThreeComponent} from '../three/three.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {AuthGuard} from '../../guards/auth.guard';
import {HomePageComponent} from './home-page.component';

export const homePageRoutes: Routes = [
  {
    path: '', component: HomePageComponent, canActivate: [AuthGuard],
    children: [
      {path: 'one', component: OneComponent},
      {path: 'two', component: TwoComponent},
      {path: 'three', component: ThreeComponent},
      {
        path: '',
        redirectTo: '/one',
        pathMatch: 'full'
      },
      {path: '**', component: PageNotFoundComponent}
    ]
  }
];
