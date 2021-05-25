import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private timer$ = timer(0, 1_000);
  public clock$ = this.timer$.pipe(map((tick) => new Date()));

  constructor() {}
}
