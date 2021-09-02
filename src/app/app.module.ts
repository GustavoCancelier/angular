import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilialPipe } from './pipes/filial.pipe';



import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DetalhesFuncionarioComponent } from './components/detalhes-funcionario/detalhes-funcionario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    FilialPipe,
    DetalhesFuncionarioComponent,
    UsuarioComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
