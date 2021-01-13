import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit, AfterViewInit {

  @Output()
  cancel = new EventEmitter();
  @ViewChild('txt')
  txt!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    (this.txt.nativeElement as HTMLInputElement).focus();
  }

}
