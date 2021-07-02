import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {}

  
  sort(column: string): void {
    this.satellites.sort(function(name: Satellite, type: Satellite): number {
       if(name[column] < type[column]) {
          return -1;
       } else if (name[column] > type[column]) {
          return 1;
       }
       return 0;
    });
 }
 


}

