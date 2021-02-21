import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import {StorageService} from 'src/app/services/storage.service';
import {Status} from 'src/app/model/Status';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let storage: jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    storage = jasmine.createSpyObj('StorageService', ['storeTask', 'getTasks']);
    component = new AddTaskComponent(storage);
  });

  it('task should have been initialized', () => {
    component.initPerson();
    expect(component.task.title).toEqual('');
    expect(component.task.description).toEqual('');
    expect(component.task.status).toEqual(Status.pending);
  });

  it('task should get unique id', () => {
    let task = [
      {
        id: 1,
        title: 'task 1',
        description: 'task 1',
        status: Status.pending
      },
      {
        id: 2,
        title: 'task 2',
        description: 'task 2',
        status: Status.completed
      }
    ];
    storage.getTasks.and.returnValue(task);
    component.initPerson();
    expect(component.isUniqueID(component.task.id)).toBeTrue();
  });
});
