import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  createAccount(uname: string, pwd: string): Observable<HttpResponse<any>> {
    const body = {
      username: uname,
      password: pwd
    };
    return this.http.post<HttpResponse<any>>(`http://localhost:8080/todoapp/api/v1/users`, body, {
      observe: 'response'
    });
  }
}
