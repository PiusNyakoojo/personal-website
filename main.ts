import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

import { AppComponent, environment } from './app/';
import { APP_ROUTES_PROVIDER } from './app/app.routes';

import { AnimationService } from './app/shared/Services/animation.service';
import { AnimationGuard } from './app/shared/Guards/animation.guard';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
	FIREBASE_PROVIDERS,

	// Initialize Firebase app
	defaultFirebase({
		apiKey: "AIzaSyAjIbBBxp9tb_EncVI2bLwEMi6CMhMGHcs",
	    authDomain: "pn-personal-website.firebaseapp.com",
	    databaseURL: "https://pn-personal-website.firebaseio.com",
	    storageBucket: "pn-personal-website.appspot.com",
	}),

	// Provide routing service
  	APP_ROUTES_PROVIDER,
  	
  	AnimationService,
  	AnimationGuard
]);

