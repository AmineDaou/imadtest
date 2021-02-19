import { DialogGuideAddComponent } from './dialog/guide/dialog-guide-add/dialog-guide-add.component';
import { GuideService } from './service/guide.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuideShowComponent } from './componant/guide-show/guide-show.component';
import { GuideAddComponent } from './componant/guide-add/guide-add.component';
import { GuideUpdateComponent } from './componant/guide-update/guide-update.component';
import { GuideComponent } from './componant/guide/guide.component';
import { GuideListComponent } from './componant/guide-list/guide-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogGuideDeleteComponent } from './dialog/guide/dialog-guide-delete/dialog-guide-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { EditorModule } from "@tinymce/tinymce-angular";
import {HttpClientModule} from'@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    GuideShowComponent,
    GuideAddComponent,
    GuideUpdateComponent,
    GuideComponent,
    GuideListComponent,
    DialogGuideAddComponent,
    DialogGuideDeleteComponent
  ],
  entryComponents: [DialogGuideAddComponent, DialogGuideDeleteComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    EditorModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [GuideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
