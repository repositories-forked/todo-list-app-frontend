import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  findUser(query: string): Observable<string> {
    const httpParams = new HttpParams().append('q', query)
      .append('ignoreProgressBar', '');
    return this.http.get<string>(`http://localhost:8080/todoapp/api/v1/users?q=${query}`, {
      params: httpParams
    });
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

  authenticate(uname: string, pwd: string): Observable<any> {
    const body = {
      username: uname,
      password: pwd
    };
    return this.http.post(`http://localhost:8080/todoapp/api/v1/auth`, body, {
      responseType: 'text'
    });
  }
}
