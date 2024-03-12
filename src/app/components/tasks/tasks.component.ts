import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common'
import { TaskItemComponent } from '../task-item/task-item.component';
import { tasks } from '../../mock-tasks/tasks';
import Task from '../../mock-tasks/task.type';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {
  tasks: Task[] = tasks;
}
