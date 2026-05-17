import { Component } from '@angular/core';

interface StudentCard {
  name: string;
  professor: string;
  designation: string;
  imageUrl: string;
  notifications: number;
}

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent {
  students: StudentCard[] = [
    {
      name: 'Data Structures',
      professor: 'Dr. Priya Singh',
      designation: 'Associate Professor',
      imageUrl: 'https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg?auto=compress&cs=tinysrgb&w=600',
      notifications: 5
    },
    {
      name: 'Algorithms',
      professor: 'Prof. Rajesh Kumar',
      designation: 'Head of Computer Science',
      imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      notifications: 2
    },
    {
      name: 'Web UX Design',
      professor: 'Dr. Anjali Verma',
      designation: 'Senior Lecturer',
      imageUrl: 'https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&w=600',
      notifications: 8
    }
  ];
}

