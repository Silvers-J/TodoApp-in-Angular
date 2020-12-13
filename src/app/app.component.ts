import { Component } from '@angular/core';
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
	inProgress = {
		name: 'In Progress',
		type: Status.inProgress
	}
}
