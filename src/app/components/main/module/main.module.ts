
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { AlbumComponent } from './album.component';
import { UploadComponent } from './upload.component';
import { MainComponent } from './main.component';
import { mainRoute } from './main.route';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'
import { AlbumService } from './album.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadService } from './upload.service'

@NgModule({
  declarations: [
    AlbumComponent,
    UploadComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(mainRoute),
    CommonModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    FormsModule
    
  ],
  providers: [
    AlbumService,
    UploadService
  ]
  
})
export class MainModule { }
