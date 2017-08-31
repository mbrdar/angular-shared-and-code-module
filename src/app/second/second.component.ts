import {Component, OnInit} from '@angular/core';
import {CounterService} from '../core/counter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

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
