import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {Task} from '../../model/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  taskList: Array<Task> = [];

  constructor(public taskService: TaskService, private router: Router) {

  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(list => {
      this.taskList = list;
    }, error => {
      this.router.navigateByUrl('/sign-in');
    });
  }

}
