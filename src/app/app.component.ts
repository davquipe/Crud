import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Lista de Personas';

  personas = [
  	{'nombre': 'David', position: 'Manager'},
  	{'nombre': 'Angel', position: 'Admin'},
  	{'nombre': 'Josue', position: 'Programmer'},
  	{'nombre': 'Dante', position: 'TI'}

  ];

  model:any = {};
  model12:any = {};
  msg:string = '';
  hideUpdate:boolean = true;

addPersonas():void{
	this.personas.push(this.model);
	this.model = {};
	this.msg = 'Se agrego Correctamente ;)';
}

deletePersonas():void{
	this.personas.splice(1, 1);
	this.msg = "Borrado :(";
}

myValue;

editPersonas():void{

}
updatePersonas():void{
}
sss
}
