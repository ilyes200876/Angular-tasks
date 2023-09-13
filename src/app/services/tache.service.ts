import { Injectable } from '@angular/core';
import { TACHES } from '../mock-tache-list';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor() { }

  fetchAll(){
    return TACHES;
  }

}
