import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    public snackbarService: SnackbarService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = new UntypedFormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    });
    console.log('Valid Status =>', this.loginForm.valid);
  }

  onSubmit() {
    console.log('form Values =>', this.loginForm.value);
    this.snackbarService.open('Logged In Sucessfully...');
    this.authService.userAuth = true;
    this.router.navigate(['/home']);
    this.loginForm.reset();
  }
}
