import {NgModule} from '@angular/core';
import {SharedModule} from '../modules/shared/shared.module';
import {AppComponent} from '../app.component';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppHeaderComponent} from './app-header/app-header.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {HomePageComponent} from './home-page/home-page.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    AppHeaderComponent,
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent
  ],
  exports: []
})
export class ComponentsModule {

}
