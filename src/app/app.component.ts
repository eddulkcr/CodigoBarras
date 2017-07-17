import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  public title : string;
  public elementType : string;
  public value : string;

  constructor(){
    this.value = "codigo123";
    this.title = "codigo barras";
    this.elementType = "canvas";

  }

  imprSelec(codBar :string)
       {var ficha=document.getElementById(codBar);var ventimp=window.open(' ','popimpr');ventimp.document.write(ficha.innerHTML);ventimp.document.close();ventimp.print();ventimp.close();}
 

}


