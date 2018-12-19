import { Component, OnInit } from '@angular/core';
import { Tarea } from '../model/tarea.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	arrTareas: Tarea[]

  constructor() { 
  this.arrTareas = [
      new Tarea('Dormir', true),
      new Tarea('Hacer la compra', false)
    ]
  }

  ngOnInit() {
  }

  handleEnviarTarea($event){
    console.log($event)
    this.arrTareas.push($event) 
  }

}
