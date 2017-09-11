import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/localStorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userLogin: string;
  userPassword: string;

  constructor(private localStorageService: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    const userData: string[] = this.localStorageService.getItem('user').split('|');
    const [userLogin, userPassword] = userData;

    if (userLogin === this.userLogin && userPassword === this.userPassword) {
      this.router.navigate(['/one']);
    }
  }

}
