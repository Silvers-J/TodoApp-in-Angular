import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/Task';
import { TaskFilterService } from '../../services/task-filter.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.styl']
})
export class StatusComponent implements OnInit {
	@Input() metaData: any;
	tasks: Task[];
  constructor(private filterService: TaskFilterService) { }

  ngOnInit(): void {
		this.tasks = this.filterService.getTasks(this.metaData.type);
		console.log(this.metaData.name);
	}
}
