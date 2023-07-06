import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getTask(): void {
    const taskId = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
    this.task = this.taskService.getTask(taskId);
  }
}
