import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.route';
import {HomePageModule} from './components/home-page/home-page.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HomePageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
