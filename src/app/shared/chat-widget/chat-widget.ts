import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.css',
})
export class ChatWidget {
  isOpen = signal(false);
  submitted = signal(false);

  toggle(): void {
    this.isOpen.update(v => !v);
    if (!this.isOpen()) this.submitted.set(false);
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    this.submitted.set(true);
  }
}
