import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listCitas: any[] = [];

  agregarCitas(cita: any) {
    // console.log('Soy el padre');
    this.listCitas.push(cita);
    console.log(this.listCitas);
  } 

  eliminarCitaListado(index: number) {
    this.listCitas.splice(index, 1);
  }

}
