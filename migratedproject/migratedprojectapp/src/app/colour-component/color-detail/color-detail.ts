import { Component } from '@angular/core';
import { ColorService } from '../../services/colorservice';
import { ColorModel } from '../../models/color';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-color-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './color-detail.html',
  styleUrl: './color-detail.css'
})
export class ColorDetail {
  color:ColorModel|null=null;
      constructor(private colorservice:ColorService,private location:Location,private router:ActivatedRoute){
      const id = Number(this.router.snapshot.paramMap.get('id'));
        this.colorservice.getColor(id).subscribe({
          next:(data)=>{
            this.color=data;
          },
          error:(err)=>{console.log(err);}
        })
  }
   goBack(): void {
    this.location.back();
  }
  

}
