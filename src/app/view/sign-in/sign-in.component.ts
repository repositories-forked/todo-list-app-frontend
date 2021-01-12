import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {

  }

  authenticate(): void {
    this.userService.authenticate(this.username, this.password)
      .subscribe(token => {
        sessionStorage.setItem(`token`, token);
        this.router.navigateByUrl('/main');
      }, error => {
        console.log(error);
      });
  }
}
