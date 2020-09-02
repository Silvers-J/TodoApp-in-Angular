import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/Task';
import { Status } from '../../model/Status';

import { StorageService } from '../../services/storage.service';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.styl']
})
export class AddTaskComponent implements OnInit {
	task: Task;
	constructor(private storage: StorageService) { }

	ngOnInit(): void {
		this.initPerson();
	}
	
	initPerson() {
		this.task = {
			id: this.getUniqueID(),
			title: '',
			description: '',
			status: Status.pending 
		}
	}

	isUniqueID(id: number): boolean {
		let tasks = this.storage.getTasks();
		return !tasks.some(task => id === task.id);
	}

	getUniqueID(): number {
		let i = 1;
		while(true && i < 20) {
			if(this.isUniqueID(i))
				return i;
			i += 1;
		}
	}

	addTask() {
		this.storage.storeTask(this.task);
		console.log(this.task);
	}

}
