import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-process',
  imports: [MatCard, MatIcon, MatButtonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss', '../first-part/first-part.component.scss']
})
export class ProcessComponent {

}
