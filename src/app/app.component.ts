import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orbit-report';
  
  sourceList: Satellite[];
  displayList: Satellite[];

      constructor() {
        this.sourceList = [
          new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
          new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
          new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
          new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
          new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
        ];
        this.displayList = this.sourceList.slice(0);
      }

      search(searchTerm: string): void {
        let matchingSatellites: Satellite[] = [];
        searchTerm = searchTerm.toLowerCase();
        for(let i=0; i < this.sourceList.length; i++) {
           let name = this.sourceList[i].name.toLowerCase();
           if (name.indexOf(searchTerm) >= 0) {
              matchingSatellites.push(this.sourceList[i]);
           }
        }
        this.displayList = matchingSatellites;
     }

}





