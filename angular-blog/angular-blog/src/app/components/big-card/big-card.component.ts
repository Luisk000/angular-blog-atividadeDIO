import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,
  
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input () id = "";
  @Input () photoCover = "";
  @Input () cardTitle = "";
  @Input () cardDescription = "";

}
