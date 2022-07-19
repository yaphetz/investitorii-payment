import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private firestore: AngularFirestore) { }

  userDefaultPassword : boolean;
  ngOnInit(): void {
    this.auth.user$.pipe(take(1)).subscribe( user => {
      let userId = user.uid;
      this.userDefaultPassword = user.defaultPassword;
      console.log(user)
    })
  }

}
