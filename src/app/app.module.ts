import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltinpipesComponent } from './builtinpipes/builtinpipes.component';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { HighlightPipe } from './highlight.pipe';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltinpipesComponent,
    PipesexampleComponent,
    HighlightPipe,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
