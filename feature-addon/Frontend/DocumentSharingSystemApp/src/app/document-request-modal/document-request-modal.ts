import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { RestoreRequestDto } from '../services/documentrestore.service';
import { DocumentRestoreService } from '../services/documentrestore.service';

@Component({
  selector: 'app-document-request-modal',
  imports: [MatDialogModule, MatFormFieldModule,MatInputModule, MatButtonModule,MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './document-request-modal.html',
  styleUrl: './document-request-modal.css',  
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}]


})
export class DocumentRequestModal {
  dialogRef = inject(MatDialogRef<RestoreRequestDto>);
    data = inject(MAT_DIALOG_DATA);
    teamService = inject(DocumentRestoreService);
    formControl: FormControl;
    snackBar = new MatSnackBar();
  
    constructor(){
      if(this.data.action == 'Add'){
        this.formControl = new FormControl(null, Validators.required)
      } else{
        this.formControl = new FormControl(this.data.teamName, Validators.required);
      }
    }
    	onUploadClick(){
		if(this.data.action== "Add"){
			if(this.formControl.valid ){
				this.data.onAccept(this.formControl.value);
				this.dialogRef.close();
				// this.snackBar.open("Team Added Succesfully", undefined, {duration: 3000});
			}
		}
  }
  onCancelClick(){
		this.dialogRef.close();
	}
  

}
