import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterPayload } from './RegisterPayload';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  registerPayLoad: RegisterPayload;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerPayLoad = new RegisterPayload();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.minLength(8)],
      confirmPassword: ['', Validators.minLength(8)],
    });
  }

  onSubmit() {
    this.registerPayLoad.username = this.registerForm.get('username')?.value;
    this.registerPayLoad.password = this.registerForm.get('password')?.value;
    this.registerPayLoad.confirmPassword =
      this.registerForm.get('confirmPassword')?.value;
    this.registerPayLoad.email = this.registerForm.get('email')?.value;

    this.authService.register(this.registerPayLoad).subscribe(
      (data) => {
        console.log('registered Successfully');
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
