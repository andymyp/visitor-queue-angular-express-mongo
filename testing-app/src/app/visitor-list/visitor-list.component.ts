import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  show: boolean = false;
  result: any = [];
  visitors: any = [];

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/visitors').subscribe((res) => {
      this.visitors = res;
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

  closeMessage() {
    this.show = false;
    this.result = [];
  }

  deleteVisitor(id: any) {
    this.http.delete(`http://127.0.0.1:3000/visitor/${id}`).subscribe((res) => {
      this.result = res;
      this.show = true;
      this.ngOnInit();
    });
  }
}
