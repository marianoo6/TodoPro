import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../model/tarea.model'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	titulo: string
	completa: string
	nuevaTarea: Tarea

  @Output() envioTarea = new EventEmitter() 

  constructor() { 

  }

  ngOnInit() {
  }

  enviarTarea(){
  	let bCompleta = (this.completa == 'true') ? true : false
  	let t = new Tarea(this.titulo, bCompleta)
  	this.envioTarea.emit(t)
  }

}
