import { Component, Input } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  bufferValue = 200;
  @Input() mode: ProgressBarMode = 'determinate';
  @Input() value = 0;
}
