import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-faqs',
  imports: [MatCard, MatIcon, MatButtonModule, MatExpansionModule, MatAccordion],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FAQSComponent {
    readonly panelOpenState = signal(false);
}
