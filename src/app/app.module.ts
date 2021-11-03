import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RegitryComponent} from './regitry/regitry.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./security/token.interceptor";
import {MatSliderModule} from "@angular/material/slider";
import {SongComponent} from './song/song.component';
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    NavbarComponent,
    FooterComponent,
    RegitryComponent,
    LoginComponent,
    SongComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatProgressBarModule,
    MatFormFieldModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule {
}
