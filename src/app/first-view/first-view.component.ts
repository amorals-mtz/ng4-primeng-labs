import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'first-view',
  templateUrl: './first-view.component.html'
})
export class FirstViewComponent {
  dirty: boolean;
  username: string;

  constructor(private router: Router) {
  }

  onSubmit(f: FormGroup) {
    this.dirty = f.dirty;
    this.router.navigate(['/second-view']);
  }
}
