import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from '../modules/shared/shared.module';
import {AppHeaderModule} from '../app-header/app-header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppHeaderModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
