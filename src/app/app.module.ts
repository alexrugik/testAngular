import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from '../modules/shared/shared.module';
import {AppHeaderModule} from '../components/app-header/app-header.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import {OneComponent} from '../components/one/one.component';
import {TwoComponent} from '../components/two/two.component';
import {ThreeComponent} from '../components/three/three.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppHeaderModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
