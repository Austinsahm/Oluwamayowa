import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  number!: number;
  miles!: number;

  car = {
    Maker: 'Toyota',
    Model: 'Camry',
    year: '2000'
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

  onNameChange(value: string){
    this.name = value;
  }

  onDateChange(value: string){
    this.date = value;
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value);
  }

  onNumberChange(value: string){
    this.number = parseFloat(value);
  }
}
