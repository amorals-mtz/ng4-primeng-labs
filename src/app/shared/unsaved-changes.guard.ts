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
