import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Import HttpClientInMemoryWebApiModule
import { InMemoryDataService } from './in-memory-data.service'; // Import your in-memory data service
import { MessagesComponent } from './messages/messages.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { APP_INITIALIZER } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from './message.service';

export function appInitializerFactory(translate: TranslateService) {
  return () => new Promise<void>((resolve) => {
    translate.use('en').subscribe(() => {
      console.log(`Successfully initialized 'en' language.`);
      resolve();
    }, () => {
      console.error(`Problem with 'en' language initialization.`);
      resolve();
    });
  });
}


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService), // Use HttpClientInMemoryWebApiModule and provide your in-memory data service
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true
    }
  ]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
