import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from '../model/Task';
import { Status } from '../model/Status';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

	//Informs about the updates on the storage to components
	changed$ = new Subject<number>();
  constructor() { }

	// Returns all the tasks
	getTasks(): Task[] {
		if( localStorage.tasks )
			return JSON.parse(localStorage.tasks);
		else
			return [];
	}

	// Returns tasks that match the status
	getFilteredTasks(type: Status): Task[] {
		if( localStorage.tasks ) {
		let tasks = JSON.parse(localStorage.tasks);
			return tasks.filter( task => task.status === type );
		}
		else
			return []
	}

	// Changes the status of the task specified by the ID
	// Eg. change status from 'pending' to 'completed'
	changeStatus(id, newStatus) {
		let tasks = this.getTasks();
		let index = tasks.findIndex(task => task.id === id);
		tasks[index].status = newStatus;
		localStorage.tasks = JSON.stringify(tasks);

		this.changed$.next(1);
	}

	storeTask(task: Task) {
		if( localStorage.tasks ) {
			let tasks = JSON.parse(localStorage.tasks);
			tasks.push(task);
			localStorage.tasks = JSON.stringify(tasks);
		} else {
			localStorage.tasks = JSON.stringify([task]);
		}
		this.changed$.next(1);
	}

	deleteTask(id: number) {
		if( localStorage.tasks ) {
			let tasks = JSON.parse(localStorage.tasks);
			let index = tasks.findIndex(task => task.id === id);
			tasks.splice(index, 1);
			localStorage.tasks = JSON.stringify(tasks);
		}
		this.changed$.next(1);
	}
}
