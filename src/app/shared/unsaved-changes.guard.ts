// The ConfirmDeactivateGuard is used to prevent our users from losing unsaved changes
// when filling out a form and accidently clicking on a button to cancel the process.
// v1.0
// Created by amorales on 20/07/17.

import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';

import { ConfirmationService } from 'primeng/components/common/api';

import { FirstViewComponent } from '../first-view/first-view.component';

import { Observer} from 'rxjs';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<FirstViewComponent> {

  constructor(private confirmationService: ConfirmationService) { }

  canDeactivate(component: FirstViewComponent) {

    // checking if changes were made
    /*
    if (target.hasChanges()) {
      // The `hasChanges()` nethod returns a boolean value indicating
      // if the components has detected any changes. This can be done
      // by checking the dirty state of the form, keeping track
      // of the previous model and compare it with the current one.
      return window.confirm('Do you really want to cancel?');
    }
    */

    // allow navigation if the form is unchanged
    if (!component.dirty) {
      return true;
    }

    return Observable.create((observer: Observer<boolean>) => {
        this.confirmationService.confirm({
            message: 'You have unsaved changes. Are you sure you want to leave this page?',
            accept: () => {
                observer.next(true);
                observer.complete();
            },
            reject: () => {
                observer.next(false);
                observer.complete();
            }
        });
    });
  }
}
