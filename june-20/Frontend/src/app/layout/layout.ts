import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-layout',
  imports: [Sidebar,RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
    sidebarOpen = false;

  onSidebarToggle(open: boolean) {
    this.sidebarOpen = open;
  }


}
