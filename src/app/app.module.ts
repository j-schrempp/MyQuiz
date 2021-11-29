import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {
  getFirestore,
  provideFirestore
} from '@angular/fire/firestore';
import {environment} from "../environments/environment";
import {getStorage, provideStorage} from "@angular/fire/storage";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
