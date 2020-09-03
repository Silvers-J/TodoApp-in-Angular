import { Injectable, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { Status } from '../model/Status';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnInit {

  constructor() { }

	ngOnInit() {
	}

	getTasks() {
		if( localStorage.tasks )
			return JSON.parse(localStorage.tasks);
		else
			return [];
	}

	getFilteredTasks(type: Status): Task[] {
		/*return [
			{
				id: 1,
				title: 'Test1',
				description: 'aasdfgh pending daoigbvoza',
				status: Status.pending
			},
			{
				id: 1,
				title: 'Test1',
				description: 'aasdfgh completed daoigbvoza',
				status: Status.completed
			},
			{
				id: 1,
				title: 'Test1',
				description: 'aasdfgh skipped daoigbvoza',
				status: Status.skipped
			}
		].filter( task => task.status === type );
*/
		if( localStorage.tasks ) {
		let tasks = JSON.parse(localStorage.tasks);
			return tasks.filter( task => task.status === type );
		}
		else
			return []
	}

	updateTasks(): Task[]{
		if( localStorage.tasks ) {
			return JSON.parse(localStorage.tasks);
		}
	}
	
	changeStatus(id, newStatus) {
		let tasks = this.getTasks();
		let index = tasks.findIndex(task => task.id === id);
		tasks[index].status = newStatus;
		console.log(tasks[index]);
		localStorage.tasks = JSON.stringify(tasks);
	}

	storeTask(task: Task) {
		if( localStorage.tasks ) {
			let tasks = JSON.parse(localStorage.tasks);
			tasks.push(task);
			localStorage.tasks = JSON.stringify(tasks);
		} else {
			localStorage.tasks = JSON.stringify([task]);
		}
		this.updateTasks();
	}

	deleteTask(id: number) {
		if( localStorage.tasks ) {
			let tasks = JSON.parse(localStorage.tasks);
			let index = tasks.findIndex(task => task.id === id);
			tasks.splice(index, 1);
			localStorage.tasks = JSON.stringify(tasks);
		}
		this.updateTasks();
	}
}
