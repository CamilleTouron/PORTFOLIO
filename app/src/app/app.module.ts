import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { ColormodeComponent } from './colormode/colormode.component';
import { LanguagemodeComponent } from './languagemode/languagemode.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionComponent } from './description/description.component';
import { CurrentComponent } from './current/current.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DescriptionModifierComponent } from './decription-modifier/decription-modifier.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    ColormodeComponent,
    LanguagemodeComponent,
    FooterComponent,
    DescriptionComponent,
    CurrentComponent,
    LoginComponent,
    DescriptionModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
