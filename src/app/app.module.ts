import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BasicFormControlComponent } from './form-examples/components/forms/basic-form-control/basic-form-control.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PageContentComponent,
    FooterComponent,
    DefaultLayoutComponent,
    IntroductionComponent,
    BasicFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
