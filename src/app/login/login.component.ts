import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showError = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(formulaire: NgForm) {
     this.authService.login(formulaire.value).subscribe(
       (result) => {
         const token = result['id'];
         console.log(token);
         localStorage.setItem('token', token);
         this.router.navigate(['']);
       },
       (erreur) => {
         console.log(erreur);
         this.showError = true;
       }
     );
  }

}
