import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModuleModule } from './shared-module/shared-module.module';
import { NavbarComponent } from './shared-module/navbar/navbar.component';

import { TeacherportalComponent } from './modules/teacher/teacherportal/teacherportal.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { VoiceassistanceComponent } from './modules/hostal/voiceassistance/voiceassistance.component';
import { VoiceSubComponent } from './modules/hostal/voice-sub/voice-sub.component';
import { VoiceMainComponent } from './modules/hostal/voice-main/voice-main.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ClosingsheetComponent } from './modules/cars/closingsheet/closingsheet.component';
import { SheetnavComponent } from './modules/cars/sheetnav/sheetnav.component';
import { SheetmodelComponent } from './modules/cars/sheetmodel/sheetmodel.component';
import { ReadMoreModule } from 'ng-readmore';
import { ReadmoreComponent } from './modules/cars/readmore/readmore.component';
import html2canvas from 'html2canvas';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdertrackingComponent,
    ContactComponent,
    VoiceassistanceComponent,
    VoiceSubComponent,
    VoiceMainComponent,
    ClosingsheetComponent,
    SheetnavComponent,
    SheetmodelComponent,
    ReadmoreComponent,


  ],
  imports: [
    ReadMoreModule,
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log("app module loaded")
  }
}
