import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/localStorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  userLogin: string;
  userPassword: string;

  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
  }

  onRegistration() {
    if (this.userLogin && this.userPassword) {
      this.localStorageService.setItem('user', `${this.userLogin}|${this.userPassword}`);
      this.router.navigate(['/login']);
    }
  }

}
