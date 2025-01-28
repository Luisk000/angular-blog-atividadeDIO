import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: false,
  
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover = "";
  contentTitle = "";
  contentDescription = "";
  private id : string | null = "0"

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")     
    )   
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(a => a.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }
}
