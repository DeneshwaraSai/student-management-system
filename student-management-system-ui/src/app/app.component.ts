import { Component } from '@angular/core';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Student Management';

  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
    { label: 'Students', icon: 'groups', route: 'students' },
    { label: 'Courses', icon: 'school', route: 'courses' },
    { label: 'Attendance', icon: 'event_available', route: 'attendance' },
    { label: 'Reports', icon: 'bar_chart', route: 'reports' }
  ];
}
