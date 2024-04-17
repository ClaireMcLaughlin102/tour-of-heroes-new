/*import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: string): Observable<string> {
    return this.languageService.currentLanguage$.pipe(
      map(currentLanguage => {
        // Simple translation logic, replace with your translations
        if (currentLanguage === 'en') {
          return key;
        } else if (currentLanguage === 'fr') {
          // Add translation for French here
          if (key === 'Top Heroes') {
            return 'Héros principaux';
          }
          // Add more translations as needed
        }
        return key;
      })
    );
  }
}*/