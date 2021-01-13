import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username = '';
  password = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  @ViewChild('frm')
  frmSignIn!: NgForm;

  constructor(private userService: UserService, private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  authenticate(): void {
    this.userService.authenticate(this.username, this.password)
      .subscribe(token => {
        sessionStorage.setItem(`token`, token);
        this.router.navigateByUrl('/main');
      }, error => {
        this.snackBar.open('Invalid username and password', 'Dismiss');
        this.username = '';
        this.password = '';
        this.frmSignIn.reset();
        (this.txtUsername.nativeElement as HTMLInputElement).focus();
      });
  }
}
