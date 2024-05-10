import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any; // To store user data
  cards = [
    {
      title: 'Card 1',
      description: 'Description of Card 1',
      content: ['JavaScript', 'Angular', 'AngularJS', 'Angular 2+']
    },
    {
      title: 'Card 2',
      description: 'Description of Card 2',
      content: ['React', 'Redux', 'Context API']
    },
    {
      title: 'Card 3',
      description: 'Description of Card 3',
      content: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Card 4',
      description: 'Description of Card 4',
      content: ['Python', 'Flask', 'SQLAlchemy']
    },
    {
      title: 'Card 5',
      description: 'Description of Card 5',
      content: ['Java', 'Spring Boot', 'Hibernate']
    },
    {
      title: 'Card 6',
      description: 'Description of Card 6',
      content: ['PHP', 'Laravel', 'Vue.js']
    }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    
    this.apiService.getUser('johnpapa').subscribe({
      next: (data) => {
         console.log(data);
        this.user = data; 
      },
      error: (error) => console.error('Error fetching user data:', error)
    });
  }
}
