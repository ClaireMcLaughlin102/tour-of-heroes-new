import { Component } from '@angular/core';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang = ''; // Property to store selected language
  title = 'Tour of Heroes';

  constructor(public languageService: LanguageService, 
    public translate: TranslateService,
    public theme: ThemeService,) {
    translate.addLangs(['en', 'fr', 'ie']); // Add supported languages
    translate.setDefaultLang('en'); // Set default language
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
