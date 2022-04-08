import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ChildParentService } from './child-parent.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  message: string;
  inputParameter = 'ORIGINAL';

  constructor(
    private cs: ChildParentService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.inputParameter = 'CHANGED';
      // this.cdRef.detectChanges();
      // this.cdRef.markForCheck();
    }, 3000);
  }
}
