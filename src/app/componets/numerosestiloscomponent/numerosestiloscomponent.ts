import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numeros',
    templateUrl: './numerosestiloscomponent.html',
    standalone: false,
    styleUrl: "./numerosestiloscomponent.css"
 

})

export class NumerosEstilosComponent implements OnInit {
   numeros: number []
    constructor() { 
    this.numeros = [1,2321,311,24,53,64,7,464646,646446,4544]
    }
    generarNumero(): void {
       let random = Math.floor(Math.random() * 100) + 1;
       this.numeros.push(random);

    }
    ngOnInit() { }
}