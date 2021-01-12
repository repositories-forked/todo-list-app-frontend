import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  loadSignIn(): void {
    this.route.navigateByUrl('/sign-in');
  }

  loadSignUp(): void {
    this.route.navigateByUrl('/sign-up');
  }
}
