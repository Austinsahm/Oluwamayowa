import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomText = faker.vehicle.vehicle();
  enteredText = '';

  onInput(value: string){
    console.log(value);
    this.enteredText = value;
  }
}
