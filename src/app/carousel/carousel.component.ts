import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  words: string[] = [
    'RESPONSIVE',
    'ADAPTIVE',
    'CLEAN DESIGN',
    'MINIMALISTIC',
    'USER-FRIENDLY',
    'INTUITIVE',
    'PROFESSIONAL',
    'POLISHED',
    'CUSTOM DESIGN',
    'TAILORED',
    'ACCESSIBLE',
    'INCLUSIVE',
    'SLEEK',
    'MODERN',
    'HIGH-QUALITY',
    'ENGAGING'
  ];

  infiniteWords: string[] = [];

  ngOnInit(): void {
    this.initializeInfiniteText();
  }

  initializeInfiniteText(): void {
    // Create an infinite array of words by repeating the original list
    this.infiniteWords = [...this.words, ...this.words, ...this.words, ...this.words, ...this.words, ...this.words, ...this.words];
  }

}
