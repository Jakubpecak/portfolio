import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() placeholder!: string;
  @Input() control: any;
  @Input() label!: string;
}
