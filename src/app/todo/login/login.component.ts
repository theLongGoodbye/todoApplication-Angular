import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string

  constructor(private store: LocalStorageService,
              private router: Router) { }

  completeSetup() {
    this.store.set('username', this.username)
  }
  ngOnInit() {
    if (this.store.get('username')) {
      this.router.navigate(['/todo']);
    }
  }

}
