import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../model/Task';
import { Status } from '../../model/Status';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styleUrls: ['./todo-item.component.styl']
})
export class TodoItemComponent implements OnInit {
	@Input() task: Task;

	// If task.status = 'pending'
	// then status = ['completed', 'skipped'] 
	status: String[];

	// Used to emit event with details like
	// current task id and the new status
	@Output() statusChanged = new EventEmitter<any>();

	constructor() { }

	ngOnInit(): void {
		this.status = [];
		for(let stat in Status) {
			if(typeof Status[stat] === 'string' && stat !== this.task.status.toString()) {
				this.status.push(Status[stat]);
			}
		}
	}

	// Called when user click one of the buttons
	changeStatus(event: any) {
		this.statusChanged.emit({
			taskID: this.task.id,
			newStatus: Status[event.target.textContent.trim()]
		});
	}
}
