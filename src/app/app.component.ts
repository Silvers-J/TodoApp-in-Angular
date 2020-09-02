import { Component } from '@angular/core';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { Status } from './model/Status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
	pending = {
		name: 'Pending',
		type: Status.pending
	}
	completed = {
		name: 'Completed',
		type: Status.completed
	}
	skipped = {
		name: 'Skipped',
		type: Status.skipped
	}
}
