import { Component,OnInit } from '@angular/core';
import { ColorService } from '../services/colorservice';
import { RouterModule} from '@angular/router';
import { ColorModel } from '../models/color';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-colour',
  imports: [RouterModule,CommonModule],
  templateUrl: './colour.html',
  styleUrl: './colour.css'
})
export class Colour implements OnInit {
  colorlist:ColorModel[]=[];
    

  constructor(private colorservice:ColorService){}
ngOnInit(): void {
    this.loadcolors();
}
loadcolors(){
  this.colorservice.getAllColors().subscribe({
    next:(value) =>{
    this.colorlist = value;
  },error:(err) =>{
      console.log(err);
    },
  })

}


deletecolour(id: number) {
    if (confirm('Are you sure you want to delete this?')) {
      this.colorservice.deleteColor(id).subscribe({
        next: () => this.loadcolors(),
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }

  
}