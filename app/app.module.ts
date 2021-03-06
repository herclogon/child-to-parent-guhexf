import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HeaderComponent } from './header.component';
import { ChildComponent } from './child.component';
import { ChildParentService } from './child-parent.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChildParentService]
})
export class AppModule { }
