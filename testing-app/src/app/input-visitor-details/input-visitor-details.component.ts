import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  show: boolean = false;
  result: any = [];

  formVisitor = new FormGroup({
    name: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/']);
  }

  closeMessage() {
    this.show = false;
    this.result = [];
  }

  createVisitor() {
    if (this.formVisitor.valid) {
      this.http
        .post('http://127.0.0.1:3000/visitor', this.formVisitor.value)
        .subscribe((res) => {
          this.result = res;
          this.show = true;
          this.formVisitor.reset();
        });
    } else {
      this.result = { code: 'danger', message: 'All input is required' };
      this.show = true;
    }
  }
}
