import { Injectable } from '@angular/core';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      state: 'To Do',
      priority: 'High',
      dueDate: new Date(),
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      state: 'In Progress',
      priority: 'Medium',
      dueDate: new Date(),
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      state: 'Done',
      priority: 'Low',
      dueDate: new Date(),
    },
  ];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: Task): void {
    task.id = this.generateNextId();
    this.tasks.push(task);
  }

  editTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  private generateNextId(): number {
    const maxId = Math.max(...this.tasks.map((task) => task.id), 0);
    return maxId + 1;
  }
}
