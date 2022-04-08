import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `Valor recibido: 
      {{recibido}}
  `
})
export class HeaderComponent  {
  private recibido: string;
  public recibir(valor) {  
    console.log(valor);
    this.recibido=valor;
  }
}