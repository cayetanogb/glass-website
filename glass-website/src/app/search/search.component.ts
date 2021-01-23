import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() emitGame = new EventEmitter<string>(null);

  constructor() { }

  ngOnInit(): void {
  }

  searchGame(e: string) {
    this.emitGame.emit(e);
  }
}
