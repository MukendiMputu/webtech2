import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
})
export class TaskComponent implements OnInit {
  @Input() task; // accepts property binding on instances of task
  @Output() delete = new EventEmitter();


  onDelete() {
    console.log('deleted');
    this.delete.emit(this.task);
  }

  constructor() {}

  ngOnInit(): void {}
}
