import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-edit',
  imports: [FormsModule,CommonModule],
  templateUrl: './bio-edit.html',
  styleUrl: './bio-edit.css'
})
export class BioEdit {
    @Input() showBioModal: boolean = false;
  @Input() currentBio: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<string>();

  editableBio: string = '';

  ngOnChanges() {
    this.editableBio = this.currentBio;
  }

  closeBioModal() {
    this.close.emit();
  }

  saveBio() {
    this.save.emit(this.editableBio);
  }


}
