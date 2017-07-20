import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

// import needed PrimeNG modules here
// import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { ButtonModule } from 'primeng/components/button/button';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { GrowlModule } from 'primeng/components/growl/growl';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { PanelModule } from 'primeng/components/panel/panel';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';

import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
// import { CountryService } from './section/service/country.service';
// import { AutoCompleteComponent }  from './section/autocomplete.component';
// import { SectionComponent } from './section/section.component';
import { ConfirmationService } from 'primeng/components/common/api';
import { UnsavedChangesGuard } from './shared/unsaved-changes.guard';
import { routes } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    // AutoCompleteModule,
    ButtonModule,
    ConfirmDialogModule,
    DataTableModule,
    DialogModule,
    GrowlModule,
    InputTextModule,
    PanelModule,
    SelectButtonModule,
    routes
  ],
  declarations: [
    AppComponent,
    FirstViewComponent, SecondViewComponent,
    // AutoCompleteComponent,
    // SectionComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ConfirmationService,
    UnsavedChangesGuard,
    // CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
