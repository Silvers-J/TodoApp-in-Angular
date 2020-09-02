import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

	storeTask(task: Task) {
		if( localStorage.tasks ) {
			let tasks = JSON.parse(localStorage.tasks);
			tasks.push(task);
			localStorage.tasks = JSON.stringify(tasks);
		} else {
			localStorage.tasks = JSON.stringify([task]);
		}
	}

	deleteTask(id: number) {
		if( localStorage.tasks ) {
			let tasks = JSON.parse(localStorage.tasks);
			let index = tasks.findIndex(task => task.id === id);
			tasks.splice(index, 1);
			localStorage.tasks = JSON.stringify(tasks);
		}
	}

	getTasks(): Task[] {
		if( localStorage.tasks )
			return JSON.parse(localStorage.tasks);
		else
			return [];
	}
}
