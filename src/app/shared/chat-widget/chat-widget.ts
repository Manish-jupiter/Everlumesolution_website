import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../service/api/api';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.css',
})
export class ChatWidget {
  isOpen = signal(false);
  submitted = signal(false);
  isSubmitting = signal(false);
  errorMessage = signal('');
  referenceId = signal('');

  private readonly fb = inject(FormBuilder);
  private readonly recipientEmail = 'dj4385@gmail.com';
  private readonly api = inject(Api);

  readonly chatForm = this.fb.nonNullable.group({
    name:         ['', [Validators.required, Validators.minLength(2)]],
    organisation: [''],
    phone:        ['', [Validators.pattern(/^[0-9+()\-\s]{7,20}$/)]],
    email:        ['', [Validators.required, Validators.email]],
    message:      ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]],
  });

  toggle(): void {
    this.isOpen.update(v => !v);
    if (!this.isOpen()) {
      this.submitted.set(false);
      this.errorMessage.set('');
      this.referenceId.set('');
      this.chatForm.reset();
    }
  }

  showError(controlName: 'name' | 'organisation' | 'phone' | 'email' | 'message'): boolean {
    const c = this.chatForm.controls[controlName];
    return c.invalid && (c.dirty || c.touched);
  }

  async onSubmit(e: Event): Promise<void> {
    e.preventDefault();
    this.errorMessage.set('');
    this.chatForm.markAllAsTouched();
    if (this.chatForm.invalid || this.isSubmitting()) return;

    this.isSubmitting.set(true);
    const referenceId = `EVL-${Date.now().toString().slice(-8)}`;
    const submittedAt = new Date();
    const data = this.chatForm.getRawValue();
    debugger
    const fd = new FormData();

    fd.append('subject', `New Chat Widget Enquiry from ${data.name}`);
    fd.append('name', data.name);
    fd.append('email', data.email);
    fd.append('phone', data.phone);
    fd.append('captcha', 'false');
    fd.append('submittedAt', submittedAt.toISOString());
    fd.append('message', data.message);
    fd.append('referenceId', referenceId);

    this.api.sendChatMail(fd).subscribe({
      next: (res: any) => {
        if (!res.success) {
          throw new Error(`Server responded with status ${res.message}`);
        } 

        this.referenceId.set(referenceId);
        this.submitted.set(true);
        this.chatForm.reset();
        this.isSubmitting.set(false);
      },
      error: (err: any) => {
        const detail = err instanceof Error ? err.message : 'Unknown error';
        this.errorMessage.set(
          `We could not deliver your message right now (${detail}). Please try again shortly, or email us at ${this.recipientEmail}.`,
        );
        this.isSubmitting.set(false);
      }
    })



    // try {
    //   const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(this.recipientEmail)}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       _subject: `New Chat Widget Enquiry from ${data.name}`,
    //       _template: 'table',
    //       _captcha: 'false',
    //       'Reference ID':  referenceId,
    //       'Submitted At':  submittedAt.toLocaleString(),
    //       'Full Name':     data.name,
    //       'Organisation':  data.organisation || '—',
    //       'Email':         data.email,
    //       'Phone':         data.phone || '—',
    //       'Message':       data.message,
    //       'Source':        'Chat Widget',
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`Server responded with status ${response.status}`);
    //   }

    //   const result = await response.json().catch(() => ({}));
    //   const succeeded = result?.success === 'true' || result?.success === true;
    //   if (!succeeded) {
    //     throw new Error(result?.message || 'The email service did not confirm delivery.');
    //   }

    //   this.referenceId.set(referenceId);
    //   this.submitted.set(true);
    //   this.chatForm.reset();
    // } catch (err) {
    //   const detail = err instanceof Error ? err.message : 'Unknown error';
    //   this.errorMessage.set(
    //     `We could not deliver your message right now (${detail}). Please try again shortly, or email us at ${this.recipientEmail}.`,
    //   );
    // } finally {
    //   this.isSubmitting.set(false);
    // }
  }
}
