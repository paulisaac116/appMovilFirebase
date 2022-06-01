import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Create your own environment variables
import { environment } from './environments/environment';

// Simulate the working on a browser
import {defineCustomElements} from '@ionic/pwa-elements/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));



  // Allows the Desktop Application to behave like a Mobile Application
  defineCustomElements(window);