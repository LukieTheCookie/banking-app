import { AccountService } from 'src/app/services/account.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async login() {
    if (this.loginForm.invalid) return;
    this.isLoading = true;
    this.errorMessage = '';
    try {
      console.log('Login form submitted:', this.loginForm.value);
      await this.accountService.createAccount(this.loginForm.value).subscribe();
      // Handle success (e.g., redirect, show message)
    } catch (err: any) {
      this.errorMessage = err?.error?.message || 'Account creation failed';
    } finally {
      this.isLoading = false;
    }
  }
}
