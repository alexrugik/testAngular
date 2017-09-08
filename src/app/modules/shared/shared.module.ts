import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {
  FormsModule,
} from '@angular/forms';

import {
  MdCheckboxModule,
  MdTabsModule
} from '@angular/material';

import {AuthGuard} from '../../guards/auth.guard';

@NgModule({
  providers: [
    AuthGuard
  ],
  imports: [],
  exports: [
    RouterModule,
    MdCheckboxModule,
    MdTabsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: []
})
export class SharedModule {

}
