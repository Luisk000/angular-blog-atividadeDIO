import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  postChunks: any[] = [];

  constructor(){}

  ngOnInit() {
    this.setPostChunks();
  }

  setPostChunks(){
    let dataFakeTemporario = dataFake.slice();
    while (dataFakeTemporario.length > 0)
      this.postChunks.push(dataFakeTemporario.splice(0, 4));
  }
  
}
