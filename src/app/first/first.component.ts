import {Component, OnInit} from '@angular/core';
import {CounterService} from '../core/counter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  counter: number;

  constructor(private counterService: CounterService) {
    counterService.getCounter().subscribe((counter: number) => {
      this.counter = counter;
    });
  }

  ngOnInit() {
  }

  incrementCounter() {
    this.counterService.increment();
  }

}
