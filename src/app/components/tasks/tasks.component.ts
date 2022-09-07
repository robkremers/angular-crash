import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';
import {Task} from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks) => this.tasks = tasks
    );
  }

  /**
   * Function:
   * - Send a request to delete the specific task.
   * - Refresh tasks: Task[] to omit the deleted task.
   * @param task
   */
  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
      () => this.tasks = this.tasks.filter( t => t.id !== task.id)
    );
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskreminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe( (task) => this.tasks.push(task));
  }

}
