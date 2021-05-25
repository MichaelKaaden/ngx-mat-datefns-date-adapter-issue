import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateFnsModule } from 'ngx-date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  NGX_MAT_DATEFNS_DATE_ADAPTER_OPTIONS,
  NGX_MAT_DATEFNS_LOCALES,
  NgxMatDateFnsDateModule,
} from 'ngx-mat-datefns-date-adapter';
import { de, es } from 'date-fns/esm/locale';
import { enUS, fr } from 'date-fns/locale';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgxMatDateFnsDateModule,
    DateFnsModule.forRoot(),
  ],
  providers: [
    {
      provide: NGX_MAT_DATEFNS_LOCALES,
      useValue: [de, enUS, es, fr],
    },
    {
      provide: NGX_MAT_DATEFNS_DATE_ADAPTER_OPTIONS,
      useValue: {
        useUtc: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
