import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import e from 'express';

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

  infiniteWords: string[] = []; // This will hold the infinite list of words

  ngOnInit(): void {
    this.startInfiniteText();
  }

  startInfiniteText(): void {

    for (let i = 0; i < this.words.length; i++) {
      const element = this.words[i];
      this.infiniteWords.push(element);
    }
  }
}
