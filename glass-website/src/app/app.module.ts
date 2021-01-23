import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { LayoutComponent } from './layout/layout.component';
import { GlassComponent } from './glass/glass.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchComponent } from './search/search.component';
import { SearchGamePipe } from './pipe/search-game.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ListGamesComponent,
    LayoutComponent,
    GlassComponent,
    SideNavComponent,
    SearchComponent,
    SearchGamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
