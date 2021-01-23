import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.scss']
})
export class GlassComponent implements OnInit {

  game = null;

  constructor() {  }

  ngOnInit(): void {
  }

  receiveGame(e: string) {
    this.game = e;
  }
}
