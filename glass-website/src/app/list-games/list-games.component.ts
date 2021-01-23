import { Component, Input, OnInit } from '@angular/core';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit {

  list;
  @Input() game;

  constructor(private listGames: GameServiceService) {
    this.list = this.listGames.gameList;
  }

  ngOnInit(): void {
  }

}
