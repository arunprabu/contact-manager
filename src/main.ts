//imports from node_modules
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//custom import
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Step2: ng app should be bootstraped with a module 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
