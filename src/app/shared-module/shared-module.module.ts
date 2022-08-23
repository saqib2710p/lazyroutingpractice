import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { TeacherModule } from '../modules/teacher/teacher.module';
import { DisplayteacherComponent } from '../modules/teacher/displayteacher/displayteacher.component';




@NgModule({
  declarations: [
  
    
  
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    
  ],
  exports:[
    FilterPipe
  ]
})
export class SharedModuleModule { }
