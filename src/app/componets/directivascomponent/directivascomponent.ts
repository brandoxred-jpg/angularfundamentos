import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directivas',
    templateUrl: './directivascomponent.html',
    standalone: false
})

export class DirectivasComponent implements OnInit {
     deportes: any[]


    constructor() { 
    this.deportes = ["Petaca","Matraca","Tacataca","Ataca","wetaca","pataca",]

    }

    ngOnInit() { }
}