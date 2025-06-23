import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../service/post.service';
import { getUserEmail } from '../misc/jwtdecode';
import { CategoryService } from '../service/category.service';
import { CommonModule } from '@angular/common';
import DOMPurify from 'dompurify';
@Component({
  selector: 'app-create-post',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css'
})
export class CreatePost implements OnInit{
  postForm: FormGroup;
  images: File[] = [];
  coverPreview: string | null = null;
imagePreviews: string[] = [];
coverFile: File | null = null;


  fetchedcategoryNames: string[] = [];


  constructor(private fb: FormBuilder, private postService: PostService,private categoryService: CategoryService) {
    const email = getUserEmail() || '';
    this.postForm = this.fb.group({
      userEmail: [email, Validators.required],
      title: ['', [Validators.required, Validators.maxLength(150)]],
      slug: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(10)]],
      categoryNames: this.fb.array([]),
      status: ['Published'],
    });
  }

  get categoryNames(): FormArray {
    return this.postForm.get('categoryNames') as FormArray;
  }

  addCategory(name: string) {
    if (name && !this.categoryNames.value.includes(name.trim().toLowerCase())) {
      this.categoryNames.push(this.fb.control(name.trim().toLowerCase()));
    }
  }

  removeCategory(index: number) {
    this.categoryNames.removeAt(index);
  }


  onSubmit() {
  if (this.postForm.invalid) return;
  const allImages = [...this.images];

  if (this.coverFile) {
  allImages.unshift(this.coverFile); // add cover photo at the beginning
}


  const post = {
    userEmail: this.postForm.value.userEmail,
    title: this.postForm.value.title,
    slug: this.postForm.value.slug,
    content: this.sanitizeInput(this.postForm.value.content),
    status: this.postForm.value.status,
    categoryNames: this.categoryNames.value,
    images: allImages
  };

  this.postService.WritePost(post).subscribe({
    next: res => alert('Post created successfully!'),
    error: err => alert('Failed: ' + err.message)
  });

}
onCoverChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.coverFile = file; // Save the file here
    const reader = new FileReader();
    reader.onload = e => this.coverPreview = reader.result as string;
    reader.readAsDataURL(file);
  }
}

onFileChange(event: any) {
  const files = Array.from(event.target.files) as File[];
  this.images = [...this.images, ...files];

  this.imagePreviews = [];
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => this.imagePreviews.push(reader.result as string);
    reader.readAsDataURL(file);
  });
}

  ngOnInit() {
    this.categoryService.getAllCategoryNames().subscribe({
      next: names => this.fetchedcategoryNames = names,
      error: err => console.error('Failed to load categories:', err)
    });
  }
sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // strips all HTML tags
    ALLOWED_ATTR: [],
  });
}

}