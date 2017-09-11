import {Routes} from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AuthGuard} from './guards/auth.guard';
import {OneComponent} from './components/one/one.component';
import {TwoComponent} from './components/two/two.component';
import {ThreeComponent} from './components/three/three.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegisterPageComponent},
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'one', component: OneComponent},
      {path: 'two', component: TwoComponent},
      {path: 'three', component: ThreeComponent},
      {
        path: '',
        redirectTo: '/one',
        pathMatch: 'full'
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];
