import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/Task';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.styl']
})
export class StatusComponent implements OnInit {
	@Input() metaData: any;
	tasks: Task[];
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
		this.tasks = this.storageService.getFilteredTasks(this.metaData.type);
	}

	onStatusChange(event) {
		this.storageService.changeStatus(event.taskID, event.newStatus);
	}
}
