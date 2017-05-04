import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';
import { REQUEST } from './request';

export function getRequest() {
  return {cookie: document.cookie};
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    BrowserTransferStateModule,
    AppModule
  ],
  providers: [
    {
      provide: REQUEST,
      useFactory: (getRequest)
    }
  ]
})
export class BrowserAppModule {
}
