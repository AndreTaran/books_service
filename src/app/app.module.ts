import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {BookDatasource} from "./services/book.datasource";
import {BooksService} from "./services/books.services";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { BookDialogComponent } from "./book-dialog/book-dialog/book-dialog.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainLayoutComponent,
    BookDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInput
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
