import { Injectable, OnInit } from '@angular/core';

import { StorageService } from './storage.service';
import { Status } from '../model/Status';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskFilterService implements OnInit {
	allTasks: Task[];
  constructor(private storage: StorageService) { }

	ngOnInit() {
		this.updateTasks();
	}

	updateTasks() {
		this.allTasks = this.storage.getTasks();
	}

	getTasks(type: Status): Task[] {
		return this.allTasks.filter( task => task.status === type );
	}
}
