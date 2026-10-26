import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    templateUrl: './segundocomponent.html',
    standalone: false
})

export class SegundoComponent implements OnInit {
    nombre: string;
    diasemana: string;
    numero: number;
    constructor() {
        this.nombre = "Alumno";
        this.diasemana= "Hoy es lunes";
        this.numero = 28;
     }

    ngOnInit() { }
}