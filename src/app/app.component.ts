import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNg TodoApp';
  todos = [
    {
      id: 1,
      task: 'first todo',
      completed: false
    }
  ]
}
