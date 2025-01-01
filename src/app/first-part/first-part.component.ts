import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-first-part',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './first-part.component.html',
  styleUrl: './first-part.component.scss',
})
export class FirstPartComponent {}
