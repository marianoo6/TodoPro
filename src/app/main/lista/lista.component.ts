import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../../model/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input("tareas") listaTareas: Tarea[]

  constructor() { }

  ngOnInit() {
  	console.log(this.listaTareas)
  }
  handleCambiarEstado(t){
  	t.completa = !t.completa;
  }

}
