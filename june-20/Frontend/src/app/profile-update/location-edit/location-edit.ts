import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './location-edit.html',
  styleUrl: './location-edit.css'
})
export class LocationEdit {
      @Input() showLocationModal: boolean = false;
  @Input() currentLocation: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<string>();

  editableLocation: string = '';

  ngOnChanges() {
    this.editableLocation = this.currentLocation;
  }

  closeLocationModal() {
    this.close.emit();
  }

  saveLocation() {
    this.save.emit(this.editableLocation);
  }


}
