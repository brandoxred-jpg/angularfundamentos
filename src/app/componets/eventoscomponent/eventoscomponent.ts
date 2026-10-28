 import { Component, OnInit } from '@angular/core';
 
 @Component({
    selector: 'app-eventos',
    templateUrl: './eventoscomponent.html',
    standalone: false
 })
 
 export class EventosComponent implements OnInit {
    mensaje: string;

    constructor() {
        this.mensaje = "hoy es mamartes";
        console.log("soy el constructor")
     }
    cambiarMensaje(): void {
    this.mensaje = "y mañana es mierdercoles!!!!";

    }
    ngOnInit() { 
     console.log("Soy On Init")

    }
    ngOnCheck(): void {
     console.log("Soy Do Check")

    }
 }