import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit, AfterViewInit {

  @Output()
  cancel = new EventEmitter();
  @Output()
  update = new EventEmitter();
  @ViewChild('txt')
  txt!: ElementRef;

  @Input()
  taskText!: string;
  @Output()
  taskTextChange = new EventEmitter();

  @Input()
  newTask = true;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    (this.txt.nativeElement as HTMLInputElement).focus();
  }

}
