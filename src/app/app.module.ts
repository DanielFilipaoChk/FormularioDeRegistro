import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';  // Importar FormularioComponent

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent  // Declarar el FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Asegurarse de que FormsModule esté importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
