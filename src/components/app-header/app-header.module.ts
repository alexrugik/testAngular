import {NgModule} from '@angular/core';
import {AppHeaderComponent} from './app-header.component';
import {SharedModule} from '../../modules/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule {
}
