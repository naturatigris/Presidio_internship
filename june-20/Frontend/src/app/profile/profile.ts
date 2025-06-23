import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserProfile } from '../models/userprofilemodel';
import { UserService } from '../service/user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { getUserRole } from '../misc/jwtdecode';
import { BioEdit } from '../profile-update/bio-edit/bio-edit';
import { LocationEdit } from '../profile-update/location-edit/location-edit';
import { ProfileStatusEdit } from '../profile-update/profile-status-edit/profile-status-edit';
import { PasswordEdit } from '../profile-update/password-edit/password-edit';
import { ProfileHeaderEdit } from '../profile-update/profile-header-edit/profile-header-edit';
import { UpdateUserDto } from '../models/userupdatemodel';
@Component({
  selector: 'app-profile',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,BioEdit,LocationEdit,ProfileStatusEdit,PasswordEdit,ProfileHeaderEdit],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit{
      user: UserProfile | null = null;
      profileImageSrc: SafeUrl = 'https://images.unsplash.com/photo-1620053580376-3de604e91953?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww';
      showBioModal: boolean = false;
      showLocationModal:boolean=false;
      showStatus:boolean=false;
      showPasswordModal: boolean = false;
      showDetailsModal = false;
      showImageModal = false;
      @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

      resource:string='notallowed';
      role:string|null=null;



  constructor(private userservice:UserService,private sanitizer:DomSanitizer){}

ngOnInit(): void {
  this.role=getUserRole();
  if (this.role=='Admin'){
    this.resource=='Allowed';
  }

      this.userservice.user$.subscribe(user => {
      this.user = user;
            if (user?.profileImage) {
              console.log(user.profileImage);
        this.profileImageSrc = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${user.profileImage}`);
      }

    });


}
    private arrayBufferToBase64(buffer: Uint8Array): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    bytes.forEach(b => binary += String.fromCharCode(b));
    return window.btoa(binary);
  }
    openBioModal() {
  this.showBioModal = true;
}

updateBio(newBio: string) {
  const updateDto = new UpdateUserDto({ bio: newBio });
  if (this.user)
  this.userservice.updateUserSection(this.user?.email, updateDto).subscribe({
      next: (res) => {
        alert('Bio updated successfully');
      },
      error: (err) => {
    console.log("Validation errors:", err?.error?.errors); // <-- critical line
        alert('Failed to update bio.');
      },
    });
}
    openLocationModal() {
  this.showLocationModal = true;
}

updateLocation(newLocation: any) {
 const updateDto = new UpdateUserDto({ location: newLocation });
  if (this.user)
  this.userservice.updateUserSection(this.user?.email, updateDto).subscribe({
      next: (res) => {
        alert('Location updated successfully');
      },
      error: (err) => {
    console.log("Validation errors:", err?.error?.errors); // <-- critical line
        alert('Failed to update Location.');
      },
    });

  this.showLocationModal = false;


}
    openStatusModal() {
  this.showStatus = true;
}

updateStatus(data: { isSuspended: boolean, suspensionReason: string | null, suspendedUntil: Date | null }) {
const updateDto = new UpdateUserDto({ isSuspended: data.isSuspended,suspensionReason:data.suspensionReason,suspendedUntil:data.suspendedUntil });
  if (this.user)
  this.userservice.updateUserSection(this.user?.email, updateDto).subscribe({
      next: (res) => {
        alert('Status updated successfully');
      },
      error: (err) => {
    console.log("Validation errors:", err?.error?.errors); // <-- critical line
        alert('Failed to update Status.');
      },
    });



  this.showStatus = false;

}
    showpasswordmodal() {
  this.showPasswordModal = true;
}

updatePassword(data: { currentPassword: any, newPassword:any }) {
  if (!data.currentPassword || !data.newPassword) {
    console.warn("Invalid data: password fields are missing");
    return;
  }

  // Proceed to update password
  console.log("Change password from:", data.currentPassword, "to:", data.newPassword);
  this.showPasswordModal = false;
}
updateUserDetails(data: { name: string; role: string }) {
 const updateDto = new UpdateUserDto({ name: data.name ,role:data.role});
  if (this.user)
  this.userservice.updateUserSection(this.user?.email, updateDto).subscribe({
      next: (res) => {
        alert('details updated successfully');
      },
      error: (err) => {
    console.log("Validation errors:", err?.error?.errors); // <-- critical line
        alert('Failed to update details.');
      },
    });

  this.showDetailsModal = false;
}
updateProfileImage(imageData: Uint8Array) {
  if (this.user) {
    this.user.profileImage = imageData; // base64 string
        const binary = Array.from(imageData).map(b => String.fromCharCode(b)).join('');
    this.profileImageSrc = 'data:image/jpeg;base64,' + btoa(binary);

  }
  this.showImageModal = false;
}
triggerFileInput() {
  this.fileInput.nativeElement.click();
}

onImageSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;

  const file = input.files[0];

  // Show preview
  const reader = new FileReader();
  reader.onload = () => {
    const arrayBuffer = reader.result as ArrayBuffer;
    const byteArray = new Uint8Array(arrayBuffer);
    this.profileImageSrc = this.convertBytesToBase64(byteArray);
  };
  reader.readAsArrayBuffer(file);

  // Update the backend
  if (this.user) {
    const updateDto = new UpdateUserDto({}); // you can pass any other fields if needed
    this.userservice.updateUserSection(this.user.email, updateDto, file).subscribe({
      next: () => {
        alert('Profile image updated successfully');
        this.showImageModal = false;
      },
      error: err => {
        console.log("Image update failed:", err);
        alert('Failed to update profile image.');
      }
    });
  }
}

convertBytesToBase64(bytes: Uint8Array): string {
  const binary = Array.from(bytes).map(b => String.fromCharCode(b)).join('');
  return 'data:image/jpeg;base64,' + btoa(binary);
}






  }





