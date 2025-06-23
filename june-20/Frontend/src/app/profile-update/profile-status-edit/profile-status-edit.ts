import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile-status-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile-status-edit.html',
  styleUrl: './profile-status-edit.css'
})
export class ProfileStatusEdit {
    @Input() showStatusModal: boolean = false;
  @Input() isSuspended: boolean = false;
  @Input() suspensionReason: string | null = null;
  @Input() suspendedUntil: Date | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{
    isSuspended: boolean,
    suspensionReason: string | null,
    suspendedUntil: Date | null
  }>();

  localSuspended: boolean = false;
  localReason: string = '';
  localUntil: string = '';

  ngOnChanges(): void {
    this.localSuspended = this.isSuspended;
    this.localReason = this.suspensionReason || '';
    this.localUntil = this.suspendedUntil ? this.suspendedUntil.toISOString().split('T')[0] : '';
  }

  onSaveStatus() {
    this.save.emit({
      isSuspended: this.localSuspended,
      suspensionReason: this.localSuspended ? this.localReason : null,
      suspendedUntil: this.localSuspended && this.localUntil ? new Date(this.localUntil) : null
    });
  }

  onCancelStatus() {
    this.close.emit();
  }


}
