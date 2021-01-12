import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, DoCheck {
  username = '';
  password = '';
  confirmPassword = '';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.userService.createAccount(this.username, this.password).subscribe(value => {
      this.router.navigateByUrl('/sign-in');
    }, error => {
      if (error.status === 400) {
        console.log('Bad request');
      } else {
        console.log(error.statusText);
      }
    });
  }

  // isDisabled(): boolean {
  //   return (this.username.trim().length === 0
  //     || this.password.trim().length === 0
  //     || this.confirmPassword.trim().length === 0
  //     || this.password !== this.confirmPassword);
  // }

  ngDoCheck(): void {
    // console.log('This is working' + Math.random());
  }
}
