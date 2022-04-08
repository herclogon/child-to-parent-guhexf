import { Injectable } from '@angular/core';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class ChildParentService {

 data=new Subject();
  constructor() { }

}