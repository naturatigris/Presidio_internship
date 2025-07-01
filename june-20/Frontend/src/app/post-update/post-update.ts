import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';
import { FormBuilder, FormGroup ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PostUpdate } from '../models/postupdatedto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-update',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './post-update.html',
  styleUrl: './post-update.css'
})
export class UpdatePostComponent implements OnInit {
  updateForm!: FormGroup;
  postId!: string;
existingImages: File[] = []; // ✅ Not { id?: string, content: string }[]

  selectedFiles: File[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id')!;
    this.updateForm = this.fb.group({
      title: [''],
      slug: [''],
      content: [''],
      status: ['Published']
    });

    this.postService.GetPostById(this.postId).subscribe(post => {
      this.updateForm.patchValue({
        title: post.title,
        slug: post.slug,
        content: post.content,
        status: post.status
      });
this.existingImages=(post.images || []).map((img: { id?: string; content: string }, index: number) =>
    this.base64ToFile(
      'data:image/jpeg;base64,' + img.content,
      `existing-image-${index}.jpg`
    )
  );

    });
  }
  base64ToFile(base64: string, filename: string): File {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }
  removeExistingImage(index: number): void {
  this.existingImages.splice(index, 1);
}


  onSubmit(): void {
  const combinedImages = [...this.existingImages, ...this.selectedFiles];

  const updatePayload: PostUpdate = {
    ...this.updateForm.value,
    images: combinedImages,
    deleteImages: combinedImages.length === 0 
  };

    this.postService.updatePost(this.postId, updatePayload).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: err => console.error('Error updating post', err)
    });
  }
   getImageUrl(file: File): string {
  return URL.createObjectURL(file);
}

removeImage(index: number): void {
  this.selectedFiles.splice(index, 1);
}

}