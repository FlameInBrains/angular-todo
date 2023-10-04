import { Component } from '@angular/core';

const todos = [
  { id: 1, title: 'HTML + CSS', completed: true },
  { id: 2, title: 'JavaScript', completed: true },
  { id: 3, title: 'React', completed: true },
  { id: 4, title: 'Angular', completed: false },
]

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editing = false;
  todos = todos;
  title = '';

  get activeTodos() {
    return this.todos.filter(todo => !todo.completed);
  }

  addTodo() {
    if (this.title.length === 0) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
    }

    this.todos.push(newTodo);
    this.title = '';
  }
}
