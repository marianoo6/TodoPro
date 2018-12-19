import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListaComponent } from './main/lista/lista.component';
import { FormularioComponent } from './main/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
