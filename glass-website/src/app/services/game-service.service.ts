import { Injectable } from '@angular/core';
import { Games } from '../data/games';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  gameList = Games;

  constructor() { }
}
