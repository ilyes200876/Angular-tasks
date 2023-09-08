import { Component } from '@angular/core';
import { ITache } from '../ITache';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent {

  taches: ITache[] = []; 

}
