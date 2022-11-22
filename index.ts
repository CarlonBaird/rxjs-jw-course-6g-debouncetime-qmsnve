import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

/*
  debounceTime delays the values emitted by a source for the given due time. If within this time a new value arrives, the previous pending value is dropped and the timer is reset. In this way debounceTime keeps track of most recent value and emits that most recent value when the given due time is passed.

  source: https://indepth.dev/reference/rxjs/operators/debounce-time
*/
const sliderInput = document.querySelector('input#slider');

//debounces the incoming values -> waits after a certain
fromEvent(sliderInput, 'input')
  .pipe(
    debounceTime(2000),
    map((event) => event.target['value'])
  )
  .subscribe((value) => console.log(value));
