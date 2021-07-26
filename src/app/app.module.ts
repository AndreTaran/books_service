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
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NoopAnimationPlayer} from "@angular/animations";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainLayoutComponent,
    BookDialogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
