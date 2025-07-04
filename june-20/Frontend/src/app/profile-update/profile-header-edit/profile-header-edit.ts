import { Component, Input, Output, EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { getUserRole } from '../../misc/jwtdecode';

@Component({
  selector: 'app-profile-header-edit',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './profile-header-edit.html',
  styleUrl: './profile-header-edit.css'
})
export class ProfileHeaderEdit implements OnChanges {
  @Input() showDetailsModal: boolean = false;
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() email: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ name: string; role: string }>();

  profileForm!: FormGroup;
userrole: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
  if (changes['name'] || changes['role'] || changes['showDetailsModal']) {
      this.initForm();
    }
  }

  initForm() {
    this.userrole = getUserRole() ?? '';

    this.profileForm = this.fb.group({
      name: new FormControl(
        { value: this.name, disabled: this.userrole !== 'User' },
        Validators.required
      ),
      role: new FormControl(
        { value: this.role, disabled: this.userrole !== 'Admin' },
        Validators.required
      )
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.save.emit(this.profileForm.getRawValue()); // includes disabled fields
    }
  }

  onCancel() {
    this.close.emit();
  }
}
