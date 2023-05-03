import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = '../../assets/img/clave.png'
  form: FormGroup;
  loading = false;
  enterprise: any;
  
  constructor(private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) {
      this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
     }

  ngOnInit(): void {
  }

  ingresar() {
    if(this.form.value.username == 'lewis' && this.form.value.password == 'lewis'){
      this.router.navigateByUrl('/dashboard');
    }else{
      this.error();
    }

  }

  error() {
    this._snackBar.open('Usuario o contraseña invalido', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1500);
  }


  

}
