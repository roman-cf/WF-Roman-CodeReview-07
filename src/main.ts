import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


window.addEventListener('scroll', function (e) {
        var nav = document.getElementById('myNav');
        if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
                nav.classList.add('nav-colored');
                nav.classList.remove('nav-transparent');
            } else {
                nav.classList.add('nav-transparent');
                nav.classList.remove('nav-colored');
            }
    });