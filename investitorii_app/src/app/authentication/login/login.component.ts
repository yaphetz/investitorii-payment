import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  @Output() isLoggedInEventEmitter = new EventEmitter();
  signinFetching: boolean = false;
  error: string = null;

  async signin(email: string, password: string) {
    this.signinFetching = true;
    this.error = null;
    await this.authService.signin(email, password).then(() => {
      if (this.authService.isLoggedIn == true) {
        console.log('student?', this.authService.isStudent(this.authService.user))
        this.authService.user$.pipe(take(1)).subscribe(res=> {
          if(this.authService.isStudent(res, true) == true)
          this.router.navigate(["acasa"]);
          else
          this.router.navigate(["submissions"]);
        })

        this.signinFetching = false;
      }
    })
    .catch(error=> {
      console.log(error)
      this.signinFetching = false;
      this.error = 'Mailul sau parola nu este corectă';
    });
  }

  ngOnInit(): void {}

}
