import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ChildParentService } from './child-parent.service';

@Component({
  selector: 'app-child',
  template: `
  <hr>
  <input type="text" #d>
      <button (click)="sendMessage(d.value)">{{ inputParameter }}</button>

      
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input()
  inputParameter = 'CHILD INIT';

  constructor(private child: ChildParentService) {
    console.log('CHILD COMPONENT CONSTRUCTOR');
    setInterval(() => {
      console.log(this.inputParameter);
    }, 1000);
  }
  sendMessage(value) {
    this.child.data.next(value);
  }
}
