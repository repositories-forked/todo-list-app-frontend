import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {Priority} from '../util/priority.enum';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Status} from '../util/status.enum';

@Injectable()
export class TaskService {

  constructor(private router: Router, private http: HttpClient) {
  }

  getAllTasks(): Observable<Array<Task>> {
    const token = sessionStorage.getItem('token');
    if (token === null) {
      return throwError('Invalid token');
    } else {
      return this.http.get<Array<Task>>(`http://localhost:8080/todoapp/api/v1/items`, {
        headers: new HttpHeaders()
          .append('Authorization', `Bearer ${token}`)
      });
    }
  }

  saveTask(taskDescription: string): Observable<Task> {
    const token = sessionStorage.getItem('token');
    const uname = sessionStorage.getItem('uname') as string;
    if (token === null || uname === null){
      return throwError('Invalid username or token');
    }
    const newTask = new Task(null, taskDescription, Priority.PRIORITY1, Status.NOT_COMPLETED, uname);
    return this.http.post<Task>(`http://localhost:8080/todoapp/api/v1/items`, newTask, {
      headers: new HttpHeaders()
        .append('Authorization', `Bearer ${token}`)
    });
  }
}
