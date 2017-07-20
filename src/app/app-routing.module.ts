import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstViewComponent } from './first-view/first-view.component';
import { SecondViewComponent } from './second-view/second-view.component';
// import { AutoCompleteComponent } from './section/autocomplete.component';
// import { SectionComponent } from './section/section.component';
import { UnsavedChangesGuard } from './shared/unsaved-changes.guard';

const router: Routes = [
  { path: '', redirectTo: 'first-view', pathMatch: 'full' },
  { path: 'first-view', component: FirstViewComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'second-view', component: SecondViewComponent },
  // { path: 'chapter/section', component: SectionComponent },
  // { path: 'chapter/autocomplete', component: AutoCompleteComponent },
  { path: '**', redirectTo: 'first-view' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
