import { Component } from '@angular/core';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { de, enUS, es, fr } from 'date-fns/locale';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private timer$ = timer(0, 1_000);
  public clock$ = this.timer$.pipe(map((tick) => new Date()));
  public date = new FormControl(new Date());

  constructor(
    private readonly dateAdapter: DateAdapter<any>,
    private readonly dateFnsConfigService: DateFnsConfigurationService
  ) {}

  changeToEnglish() {
    this.dateAdapter.setLocale(enUS);
    this.dateFnsConfigService.setLocale(enUS);
  }

  changeToFrench() {
    this.dateAdapter.setLocale(fr);
    this.dateFnsConfigService.setLocale(fr);
  }

  changeToGerman() {
    this.dateAdapter.setLocale(de);
    this.dateFnsConfigService.setLocale(de);
  }

  changeToSpanish() {
    this.dateAdapter.setLocale(es);
    this.dateFnsConfigService.setLocale(es);
  }
}
