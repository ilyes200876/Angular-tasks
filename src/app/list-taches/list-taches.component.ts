import { Component, OnInit } from '@angular/core';
import { ITache } from '../ITache';
import { TacheService } from '../services/tache.service';

@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent implements OnInit {

  taches: ITache[] = []; 

  constructor(private tacheService: TacheService){}

  ngOnInit(){
    this.getALl();
  }

  getALl(){
    this.taches = this.tacheService.fetchAll();
    return this.taches;
  }

}
