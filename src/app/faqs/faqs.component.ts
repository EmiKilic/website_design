import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faqs',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatExpansionModule, MatAccordion],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FAQSComponent {
    readonly panelOpenState = signal(false);
    
}