import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Router} from '@angular/router';
import {Task} from '../../model/task';
import {Status} from '../../util/status.enum';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  taskList: Array<Task> = [];
  Status = Status;
  visibleTaskEditor = false;
  currentTask: Task| null = null;

  constructor(public taskService: TaskService, private router: Router,
              private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(list => {
      this.taskList = list;
    }, error => {
      this.router.navigateByUrl('/sign-in');
    });
  }

  signOut(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('uname');
    this.router.navigateByUrl('/welcome');
  }

  addNewTask(taskDescription: string): void {
    this.taskService.saveTask(taskDescription).subscribe(task => {
      this.taskList.push(task);
      this.visibleTaskEditor = false;
    }, error => {
      if (error instanceof HttpErrorResponse){
        this.snackBar.open('Something went wrong! Please try again!', 'Dismiss', {
          duration: 2000
        });
      }else{
        // If username or token is missing
        this.router.navigateByUrl('/sign-in');
      }
    });
  }

  editTask(task: Task): void {
    this.currentTask = task;
    this.visibleTaskEditor = true;
  }
}
