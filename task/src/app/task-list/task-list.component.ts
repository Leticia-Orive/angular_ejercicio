import { Component, Inject, OnInit } from '@angular/core';
import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(@Inject(TaskService) public taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.getTasks();
  }

  editTask(taskId: number): void {
    // Implementar lógica para editar la tarea según tus necesidades
  }

  createTask(): void {
    // Implementar lógica para crear una nueva tarea según tus necesidades
  }
}
