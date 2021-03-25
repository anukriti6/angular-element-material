import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomTableComponent } from './som-table/som-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    CustomTableComponent,
    SomTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[CustomTableComponent]
})
export class AppModule {
constructor(private injector : Injector){}
ngDoBootstrap(){
      const el = createCustomElement(CustomTableComponent, {injector : this.injector});
  customElements.define('my-table',el);
  }
}
