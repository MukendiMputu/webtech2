import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  taskItems = [
    {
      id: 1,
      name: 'Build web app',
      category: 'Assignment',
      createdOn: '25.06.2020',
      done: '17.07.2020',
      closed: true,
    },
    {
      id: 2,
      name: 'Buy LCD monitor at Conrad',
      category: 'Freetime',
      createdOn: '25.06.2020',
      done: 'null',
      closed: false,
    },
    {
      id: 3,
      name: 'Visit my niece',
      category: 'Family',
      createdOn: '20.06.2020',
      done: 'null',
      closed: false,
    },
    {
      id: 4,
      name: 'Update LinkedIn profile',
      category: 'Career',
      createdOn: '22.06.2020',
      done: 'null',
      closed: false,
    },
    {
      id: 5,
      name: 'Build App for recepies suggestions',
      category: 'Freetime',
      createdOn: '25.06.2020',
      done: 'null',
      closed: false,
    },
  ];

  ngOnInit(): void {}

  onTaskDelete(task) {}
}
