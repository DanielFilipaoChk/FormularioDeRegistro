import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formSubmitted = false;

  constructor() {}

  onSubmit() {
    // Este método se ejecuta cuando el formulario se envía con éxito
    this.formSubmitted = true;
  }
}
