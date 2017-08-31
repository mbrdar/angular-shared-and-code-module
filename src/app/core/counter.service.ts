import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CounterService {

  private counter$ = new BehaviorSubject<number>(0);

  constructor() {
    console.log('Service initialised');
  }

  increment() {
    this.counter$.next(this.counter$.getValue() + 1);
  }

  getCounter(): BehaviorSubject<number> {
    return this.counter$;
  }

}
