import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) {}
  @Input() email = '';

  signup(email: string, password: string) {
    this.authService.signup(email, password);
  }

  ngOnInit(): void {}

}
