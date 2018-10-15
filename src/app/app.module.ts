import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/shared/header/search.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailComponent } from './components/contacts/contact-detail/contact-detail.component';
import { ContactsService } from './services/contacts.service';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AuthGuard } from './guards/auth.guard';


const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/new', component: AddContactComponent },
  { path: 'contacts/:contactId', 
    component: ContactDetailComponent, 
    canActivate: [AuthGuard]
  }
]

//Decorator - function that needs some param (object )
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavComponent,
    ContactsComponent,
    ConceptsComponent,
    AddContactComponent,
    ContactDetailComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule
  ],
  providers: [
    ContactsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]  //Step3: module should be bootstrapped with a comp
})
export class AppModule { }
