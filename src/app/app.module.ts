import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RichTextEditorModule,ToolbarService, LinkService, ImageService, HtmlEditorService} from '@syncfusion/ej2-ng-richtexteditor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RichTextEditorModule
  ],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
