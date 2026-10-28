import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './componets/primercomponent/primercomponent';
import { SegundoComponent } from './componets/segundocomponent/segundocomponent';
import { TercerComponente } from './componets/tercercomponent/tercercomponent';
import { EventosComponent } from './componets/eventoscomponent/eventoscomponent';
import { DirectivasComponent } from './componets/directivascomponent/directivascomponent';
import { NumerosEstilosComponent } from './componets/numerosestiloscomponent/numerosestiloscomponent';

@NgModule({
  declarations: [
    App, PrimerComponent, SegundoComponent,
    TercerComponente, EventosComponent, DirectivasComponent,
    NumerosEstilosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
