import { Component, Input, OnInit } from '@angular/core';
import Task from '../../mock-tasks/task.type';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})

export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  ngOnInit(): void {
      console.log('**** task', this.task)
  }
}
