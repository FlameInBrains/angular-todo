import { Component } from '@angular/core';

const todos = [
  { id: 1, title: 'HTML + CSS', completed: true },
  { id: 2, title: 'JavaScript', completed: true },
  { id: 3, title: 'React', completed: true },
  { id: 4, title: 'Angular', completed: false },
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editing = false;
  todos = todos;
}
