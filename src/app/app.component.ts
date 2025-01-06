import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FirstPartComponent } from './first-part/first-part.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProcessComponent } from './process/process.component';
import { StackingCardsComponent } from './stacking-cards/stacking-cards.component';
import { FAQSComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, HeaderComponent,ProcessComponent,MatButtonModule, StackingCardsComponent,FirstPartComponent, CarouselComponent, FAQSComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-website_design';
}
