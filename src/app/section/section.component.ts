import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';

import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'section',
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit {
  activeIndex: number = 0;
  firstName: string;
  lastName: string;
  address: string;

  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // do something
  }

  next() {
    this.activeIndex++;
  }

  ok() {
    this.activeIndex = 0;
  }

  onChange(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }
}
