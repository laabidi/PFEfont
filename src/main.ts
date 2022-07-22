/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const runCrisp = () => {
  const d = document;
  const s: any = d.createElement('script');
  s.src = 'https://client.crisp.chat/l.js';
  s.async = 1;
  d.head.appendChild(s);
};
(window as any).CRISP_WEBSITE_ID = '1fd8a579-6fc1-464e-9ea6-1723c31b3815'
runCrisp();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
