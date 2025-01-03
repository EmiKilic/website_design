import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FirstPartComponent } from './first-part/first-part.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProcessComponent } from './process/process.component';
import { StackingCardsComponent } from './stacking-cards/stacking-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, ProcessComponent,MatButtonModule, StackingCardsComponent,FirstPartComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-website_design';
}
