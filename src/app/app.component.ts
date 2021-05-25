import { Component } from '@angular/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { de, es } from 'date-fns/locale';
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

  constructor(private dateFnsConfigService: DateFnsConfigurationService) {}

  changeToEnglish() {
    this.dateFnsConfigService.setLocale(undefined);
  }

  changeToGerman() {
    this.dateFnsConfigService.setLocale(de);
  }

  changeToSpanish() {
    this.dateFnsConfigService.setLocale(es);
  }
}
