import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs',
  imports: [MatCard, MatIconModule, MatButtonModule, CommonModule, MatExpansionModule, MatAccordion],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FAQSComponent {
  faqItems = [
    { question: 'How long does it take to complete a project?', answer: 'The timeline depends on the complexity and scope of the project. On average, smaller projects take 2–4 weeks, while larger projects may take several months.' },
    { question: 'Do you offer responsive design for mobile and tablet?', answer: 'Yes! I ensure that every project I create is fully responsive and works seamlessly across all devices and screen sizes.' },
    { question: 'Can I request changes after the project is delivered?', answer: 'Absolutely. I offer post-launch support for revisions and updates to make sure the final product aligns with your expectations.' },
    { question: 'What technologies do you use for your projects?', answer: 'I primarily work with Angular, TypeScript, JavaScript, Firebase, HTML, and CSS. However, I’m always open to exploring new tools if the project requires it.' },
  ];

  openedPanelIndex: number | null = null; // Speichert das aktuell geöffnete Panel

  // Methode, um sicherzustellen, dass nur ein Panel geöffnet ist
  onPanelOpened(index: number): void {
    this.openedPanelIndex = this.openedPanelIndex === index ? null : index;
  }
}
