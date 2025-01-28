import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  dataBig: any;
  dataSmall: any;

  constructor(){}

  ngOnInit() {
    this.dataBig = dataFake[0]
    this.dataSmall = dataFake.slice(1)
  }

}
