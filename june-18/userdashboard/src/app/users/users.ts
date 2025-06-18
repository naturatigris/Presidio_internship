import { Component ,OnInit,Inject, PLATFORM_ID } from '@angular/core';
import { UserService } from '../Service/user.service';
import { UserModel } from '../models/UserModel';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { BaseChartDirective} from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

Chart.register(ChartDataLabels);


@Component({
  selector: 'app-users',
  imports: [CommonModule,BaseChartDirective,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit{
  users:UserModel[]=[];
    genderData: any;
  roleData: any;
  isBrowser: boolean=true;
  selectedGender: string = '';
selectedRole: string = '';
availableRoles: string[] = [];
allUsers: UserModel[] = [];
chartPlugins = {
  ...ChartDataLabels,
  id: 'datalabels'  // Required: gives the plugin a valid ID
};
    pieOptions:any= {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: { size: 14 }
        }
},        datalabels: {
      color: '#000',
      formatter: (value: any) => value,
      anchor: 'end',
      align: 'start',
      font: {
        weight: 'bold',
        size: 14
      }
    }


    }
  };

  barOptions :any= {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => ` ${context.dataset.label}: ${context.parsed.y}`
        }
      },
          datalabels: {
      color: '#000',
      anchor: 'end',
      align: 'top',
      formatter: (value: any) => value,
      font: {
        weight: 'bold',
        size: 12
      }
    }
  

    },
    scales: {
      x: {
        ticks: { color: '#333' }
      },
      y: {
        ticks: {
          color: '#333',
          beginAtZero: true,
          precision: 0
        }
      }
    }
  };


    loading:boolean = true;
    


  constructor(private userservice:UserService,    @Inject(PLATFORM_ID) private platformId: Object
){
      this.isBrowser = isPlatformBrowser(platformId);

}
  ngOnInit(): void {
        if (!this.isBrowser) return;

  this.userservice.fetchAllUsers().subscribe((users: UserModel[]) => {
    console.log('Fetched users:', users); // ✅ Check what's being returned

    if (!Array.isArray(users)) {
      console.error('Expected an array of users but got:', users);
      return;
    }

    this.allUsers = users;
    this.users = users;
    this.availableRoles = Array.from(new Set(users.map(u => u.role)));
    this.updateCharts(users);
    this.loading = false;

      this.loading = false;
    });
  }
applyFilters() {
  let filtered = this.allUsers;

  if (this.selectedGender) {
    filtered = filtered.filter(user => user.gender === this.selectedGender);
  }

  if (this.selectedRole) {
    filtered = filtered.filter(user => user.role === this.selectedRole);
  }

  this.users = filtered;
  this.updateCharts(filtered);
}

updateCharts(users: UserModel[]) {
  // Gender Chart
  const genderCounts = users.reduce((acc: any, user: any) => {
    acc[user.gender] = (acc[user.gender] || 0) + 1;
    return acc;
  }, {});

  this.genderData = {
    labels: ['Female', 'Male'],
    datasets: [{
      data: [genderCounts['female'] || 0, genderCounts['male'] || 0],
      backgroundColor: ['#ff6384', '#36a2eb'],
    }]
  };

  // Role Chart
  const roleCounts = users.reduce((acc: any, user: any) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  this.roleData = {
    labels: Object.keys(roleCounts),
    datasets: [{
      label: 'Users per Role',
      data: Object.values(roleCounts),
      backgroundColor: '#4caf50'
    }]
  };
}


}
