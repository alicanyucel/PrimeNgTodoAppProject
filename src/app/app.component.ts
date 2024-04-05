import { Component } from '@angular/core';
import { Todo } from 'src/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrimeNg TodoApp';
  task='';
  todos = [
    {
      id: 1,
      task: 'first todo',
      completed: true
    },
    {
      id: 2,
      task: 'second todo',
      completed: false
    }
  ]
  updateTodo(e: unknown, todo: Todo) {
    console.log(e, todo)
  }
  deleteTodo(e:unknown,id:Todo['id']){
console.log(e,id);
  }
  addTodo(){
    console.log('added',this.task)
  }
}