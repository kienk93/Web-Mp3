var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';
import { NavBarModule } from './shared/navbar';
import { FooterModule } from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './form-login/login/login.component';
import { UserAccountComponent } from './form-login/user-account/user-account.component';
import { ChangePasswordComponent } from './manage-profile/change-password/change-password.component';
import { httpInterceptorProviders } from "./service/auth.interceptor";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChangeAvatarComponent } from './manage-profile/change-avatar/change-avatar.component';
import { CreateCategoryComponent } from './content/categoryManage/create-category/create-category.component';
import { PageCategoryComponent } from './content/categoryManage/page-category/page-category.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateSongComponent } from './content/songManage/create-song/create-song.component';
import { PageSongComponent } from './content/songManage/page-song/page-song.component';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { UpdateCategoryComponent } from './content/categoryManage/update-category/update-category.component';
import { CreateSingerComponent } from './content/singerManage/create-singer/create-singer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateBandComponent } from './content/bandManage/create-band/create-band.component';
export var appRoutes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'user-account', component: UserAccountComponent, data: { title: 'User-Account' } },
    { path: 'change-password', component: ChangePasswordComponent, data: { title: 'Change-Password' } },
    { path: 'change-avatar', component: ChangeAvatarComponent, data: { title: 'Change-Avatar' } },
    {
        path: 'guide/getting-started',
        component: GettingStartedComponent,
        data: { title: 'Getting Started' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, ChangePasswordComponent, UploadAvatarComponent, ChangeAvatarComponent, CreateCategoryComponent, PageCategoryComponent, CreateSongComponent, PageSongComponent, UploadFileComponent, UpdateCategoryComponent, CreateSingerComponent, CreateBandComponent],
            imports: [
                HttpClientModule,
                BrowserModule,
                MatCardModule,
                FormsModule,
                MatToolbarModule,
                MatIconModule,
                MatInputModule,
                MatRadioModule,
                MatCheckboxModule,
                MatSlideToggleModule,
                MatButtonModule,
                BrowserAnimationsModule,
                NavBarModule, FooterModule,
                MatNativeDateModule,
                NgxAudioPlayerModule,
                AngularFireStorageModule,
                AngularFireModule.initializeApp(environment.firebaseConfig),
                RouterModule.forRoot(appRoutes, { useHash: false }), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, Ng2SearchPipeModule, MatProgressBarModule, MatSelectModule, MatDatepickerModule
            ],
            providers: [httpInterceptorProviders],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map