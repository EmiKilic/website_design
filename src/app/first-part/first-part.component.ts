import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-first-part',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.scss'],
})
export class FirstPartComponent implements OnInit {
  words: string[] = [
    'assets/mockup_5.jpg',
    'assets/mockup_4_1.jpg',
    'assets/mockup_3.jpg',
    'assets/mockup_5.jpg',
    'assets/mockup_4_1.jpg',
    'assets/mockup_3.jpg',
  ];

  wordss: string[] = [
    'assets/mockup.jpeg',
    'assets/mockup_2.jpg',
    'assets/mockup_3_1.jpg',
    'assets/mockup_4.jpg',
    'assets/mockup.jpeg',
    'assets/mockup_2.jpg',
  ];

  infiniteWords: string[] = [];
  infiniteWordss: string[] = [];

  ngOnInit(): void {
    this.initializeInfiniteText();
    this.initializeInfiniteTexts();
  }

  initializeInfiniteText(): void {
    if (this.words?.length) {
      this.infiniteWords = Array(7).fill(this.words).flat(); // Safer repetition
    } else {
      console.warn('Words array is empty or null!');
      this.infiniteWords = [];
    }
  }

  initializeInfiniteTexts(): void {
    if (this.wordss?.length) {
      this.infiniteWordss = Array(7).fill(this.wordss).flat();
    } else {
      console.warn('Wordss array is empty or null!');
      this.infiniteWordss = [];
    }
  }
}
