import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-first-part',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './first-part.component.html',
  styleUrl: './first-part.component.scss',
})
export class FirstPartComponent {
  words: any[] = [
    'assets/mockup_5.jpg',
    'assets/mockup_4_1.jpg',
    'assets/mockup_3.jpg',
    'assets/mockup_5.jpg',
    'assets/mockup_4_1.jpg',
    'assets/mockup_3.jpg',
    'assets/mockup_5.jpg',
    'assets/mockup_4_1.jpg',
    'assets/mockup_3.jpg',
    'assets/mockup_5.jpg',
    'assets/mockup_4_1.jpg',
    'assets/mockup_3.jpg',
  ];

  wordss: any[] = [
    'assets/mockup.jpeg',
    'assets/mockup_2.jpg',
    'assets/mockup_3_1.jpg',
    'assets/mockup_4.jpg',
    'assets/mockup.jpeg',
    'assets/mockup_2.jpg',
    'assets/mockup_3_1.jpg',
    'assets/mockup_4.jpg',
    'assets/mockup.jpeg',
    'assets/mockup_2.jpg',
    'assets/mockup_3_1.jpg',
    'assets/mockup_4.jpg',
  ];

  infiniteWords: any[] = [];
  infiniteWordss: any[] = [];

  ngOnInit(): void {
    this.initializeInfiniteText();
    this.initializeInfiniteTexts();
  }

  initializeInfiniteText(): void {
    // Create an infinite array of words by repeating the original list
    this.infiniteWords = [...this.words, ...this.words, ...this.words, ...this.words, ...this.words, ...this.words, ...this.words];
  }

  initializeInfiniteTexts(): void {
    // Create an infinite array of words by repeating the original list
    this.infiniteWordss = [...this.wordss, ...this.wordss, ...this.wordss, ...this.wordss, ...this.wordss, ...this.wordss, ...this.wordss];
  }
}
