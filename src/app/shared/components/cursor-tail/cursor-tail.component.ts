import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cursor-tail',
  templateUrl: './cursor-tail.component.html',
  styleUrl: './cursor-tail.component.scss',
})
export class CursorTailComponent {
  isCursorTailEnabled = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isCursorTailEnabled) {
      return;
    }
    const { clientX, clientY } = event;
    const trail = this.renderer.createElement('div');
    this.renderer.addClass(trail, 'cursor-trail');
    this.renderer.setStyle(trail, 'left', `${clientX}px`);
    this.renderer.setStyle(trail, 'top', `${clientY}px`);
    this.renderer.appendChild(document.body, trail);
    setTimeout(() => {
      this.renderer.removeChild(document.body, trail);
    }, 500);
  }

  toggleCursorTail() {
    this.isCursorTailEnabled = !this.isCursorTailEnabled;
  }
}
