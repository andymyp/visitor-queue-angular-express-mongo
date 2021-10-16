import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  show: boolean = false;
  result: any = [];
  queues: any = [];
  numberQueue: any = '';

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/queues').subscribe((res) => {
      this.queues = res;

      var number = this.queues.data ? this.queues.data[0].number : 'A000';
      this.numberQueue = this.incrementNumber(number);
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }

  closeMessage() {
    this.show = false;
    this.result = [];
  }

  takeQueue() {
    this.http
      .post('http://127.0.0.1:3000/queue', { number: this.numberQueue })
      .subscribe((res) => {
        window.print();
        this.ngOnInit();
        this.result = res;
        this.show = true;
      });
  }

  deleteQueue(id: any) {
    this.http.delete(`http://127.0.0.1:3000/queue/${id}`).subscribe((res) => {
      this.result = res;
      this.show = true;
      this.ngOnInit();
    });
  }

  incrementNumber(input: any) {
    var number = parseInt(input.trim().match(/\d+$/), 10);
    var letter = input.trim().match(/^[A-Za-z]/)[0];
    var newNumber = '';

    if (number >= 999) {
      number = 1;
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
      letter = letter === '[' ? 'A' : letter === '{' ? 'a' : letter;
    } else {
      number++;
    }

    newNumber =
      '000'.substring(0, '000'.length - number.toString().length) + number;

    return letter + newNumber.toString();
  }
}
