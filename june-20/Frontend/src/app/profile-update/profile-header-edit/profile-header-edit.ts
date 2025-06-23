import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-header-edit',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './profile-header-edit.html',
  styleUrl: './profile-header-edit.css'
})
export class ProfileHeaderEdit implements OnInit{
  @Input() showDetailsModal: boolean = false;
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ name: string; role: string }>();

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.profileForm.patchValue({
      name: this.name,
      role: this.role
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.save.emit(this.profileForm.value);
    }
  }

  onCancel() {
    this.close.emit();
  }

}
