import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {homePageRoutes} from './home-page.router';
import {ComponentsModule} from '../components.module';


@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild(homePageRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: [],
})
export class HomePageModule {

}
