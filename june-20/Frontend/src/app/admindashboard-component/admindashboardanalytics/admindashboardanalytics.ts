import { Component, AfterViewInit ,OnInit} from '@angular/core';
import Chart from 'chart.js/auto';
import { PostService } from '../../service/post.service';
import { UserService } from '../../service/user.service';
import { UserProfile } from '../../models/userprofilemodel';
import { Post } from '../../models/postmodel';

@Component({
  selector: 'app-admindashboardanalytics',
  imports: [],
  templateUrl: './admindashboardanalytics.html',
  styleUrl: './admindashboardanalytics.css'
})
export class Admindashboardanalytics implements AfterViewInit ,OnInit{
  users:UserProfile[]|null=null;
  posts:Post[]|null=null;
  private chartInstance: Chart | null = null;
  weekRange: string = '';


  constructor(private userservice:UserService,private postservice:PostService){}
ngOnInit(): void {
      this.setWeekRange(); // ✅ set date range at start

  this.userservice.getAllUsers().subscribe(users => {
    this.users = users;
    this.tryRenderChart(); // call after users loaded
  });

  this.postservice.getAllPosts().subscribe(posts => {
    this.posts = posts;
    console.log(this.posts?.length);
    this.tryRenderChart(); // call after posts loaded
  });
}
setWeekRange() {

  const start = this.getStartOfWeek(); // Monday
  const end = new Date(start);
  end.setDate(start.getDate() + 6); // Sunday

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short', day: 'numeric', month: 'short'
  };

  const startStr = start.toLocaleDateString('en-US', options); // Mon, 24 Jun
  const endStr = end.toLocaleDateString('en-US', options);     // Sun, 30 Jun
  console.log('date',startStr);

  this.weekRange = `${startStr} - ${endStr}`;
}

tryRenderChart() {
  if (this.users && this.posts) {
    this.renderChart();
  }
}
getStartOfWeek(): Date {
  const today = new Date();
  const day = today.getDay(); // Sunday = 0, Monday = 1, etc.
  const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Get Monday

  const monday = new Date(today);
  monday.setDate(diff);
  monday.setHours(0, 0, 0, 0); // ✅ Set time to midnight
  return monday;
}
getDayName(date: Date): string {
  return date.toLocaleDateString('en-US', { weekday: 'short' }); // e.g. Mon, Tue
}

  ngAfterViewInit(): void {
    this.renderChart();
  }

renderChart() {
  const startOfWeek = this.getStartOfWeek();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const postCount = new Array(7).fill(0);
  const userCount = new Array(7).fill(0);

  this.posts?.forEach(post => {
    if (post.createdAt){
      const created = new Date(post.createdAt);
    console.log('Post created:', post.createdAt, 'Parsed as:', new Date(post.createdAt));

    if (created >= startOfWeek) {
      const dayIndex = created.getDay() === 0 ? 6 : created.getDay() - 1;
      postCount[dayIndex]++;
    }}
  });
  console.log(postCount);

  this.users?.forEach(user => {
    const created = new Date(user.createdAt);
    if (created >= startOfWeek) {
      const dayIndex = created.getDay() === 0 ? 6 : created.getDay() - 1;
      userCount[dayIndex]++;
    }
  });

  const ctx = document.getElementById('postBlogChart') as HTMLCanvasElement;
    if (this.chartInstance) {
    this.chartInstance.destroy();
  }

  this.chartInstance=new Chart(ctx, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [
        {
          label: 'Posts',
          data: postCount,
          backgroundColor: '#004f83'
        },
        {
          label: 'Users',
          data: userCount,
          backgroundColor: '#1976d2'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false } },
        y: {
          beginAtZero: true,
          grid: { color: '#e0e0e0' }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#333',
            font: { size: 14 }
          }
        }
      }
    }
  });
}
}
