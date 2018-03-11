import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Lista de Angular';

  Alumnos = [
  	{'nombre': 'DAvid', position: 'manager'},
  	{'nombre': 'Angel', position: 'admin'},
  	{'nombre': 'Josue', position: 'programmer'},
  	{'nombre': 'DAnte', position: 'TI'}

  ];
  model:any = {};

addAlumnos():void{

}

deleteAlumnos():void{

}

editAlumnos():void{

}
updateAlumnos():void{
}
sss
}
