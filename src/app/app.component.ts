import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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

//Part 5: Fetch Satellite Data
      constructor() {
        this.sourceList = [];
        this.displayList = [];
        let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
     
        window.fetch(satellitesUrl).then(function(response) {
           response.json().then(function(data) {
     
              let fetchedSatellites = data.satellites;
              // TODO: loop over satellites
                  for (let i=0; i < fetchedSatellites.length; i++){

              // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
                  let newSatellite = new Satellite (
                  fetchedSatellites[i].name, 
                  fetchedSatellites[i].type, 
                  fetchedSatellites[i].launchDate, 
                  fetchedSatellites[i].orbitType, 
                  fetchedSatellites[i].operational,
                  );

              // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
                  this.sourceList.push(newSatellite);
                }
              this.displayList = this.sourceList.slice(0);
          }.bind(this));
        }.bind(this));
     
     }


//Part 8: Search
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





