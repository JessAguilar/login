import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPageModule } from './modal/modal.module';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCt_3ZN7RBId-2noltkSfo03pj_eEn2h4I",
  authDomain: "tienda-de-celulares-2efc4.firebaseapp.com",
  databaseURL: "https://tienda-de-celulares-2efc4.firebaseio.com",
  projectId: "tienda-de-celulares-2efc4",
  storageBucket: "tienda-de-celulares-2efc4.appspot.com",
  messagingSenderId: "812145625513"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
