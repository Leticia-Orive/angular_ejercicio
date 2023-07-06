import { Component, Inject, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    state: '',
    priority: '',
    dueDate: new Date(),
  };

  constructor(@Inject(TaskService) public taskService: TaskService) {}

  ngOnInit(): void {}

  createTask(): void {
    this.taskService.createTask(this.task);
  }

  editTask(): void {
    this.taskService.editTask(this.task);
  }
}
