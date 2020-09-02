import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.styl']
})
export class TodoItemComponent implements OnInit {
	@Input() task: Task;
  constructor() { }

  ngOnInit(): void {
  }
}
