import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true, // This is optional if you're using standalone components
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
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
    'ENGAGING',
  ];

  infiniteWords: string[] = [];

  ngOnInit(): void {
    // Initialize the infinite text
    this.initializeInfiniteText();
  }

  ngAfterViewInit(): void {
    // Confirm the view has been fully initialized
    console.log('Carousel component view initialized.');
  }

  initializeInfiniteText(): void {
    if (this.words && this.words.length > 0) {
      console.log('Initializing words...');
      // Repeat the array to create the "infinite" effect
      this.infiniteWords = Array(5).fill(this.words).flat();
      console.log('Infinite words initialized:', this.infiniteWords);
    } else {
      console.error('Words array is empty or undefined!');
      this.infiniteWords = []; // Fallback to an empty array to avoid errors in the template
    }
  }
}
