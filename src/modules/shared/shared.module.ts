import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdCheckboxModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MdCheckboxModule,
    MdTabsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class SharedModule {

}
