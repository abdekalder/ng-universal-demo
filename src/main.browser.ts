import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAppModule } from './app/browser-app.module';
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/dist/src/tokens';
import { CompilerOptions } from '@angular/core';

// extra providers
const compilerOptions: CompilerOptions = {
  providers: [
    {
      provide: REQUEST,
      useValue: {}
    },
    {
      provide: RESPONSE,
      useValue: {}
    }
  ]
};

platformBrowserDynamic().bootstrapModule(BrowserAppModule, compilerOptions);
