import {AfterViewInit, Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Book } from "../../models/book";
import { BooksService } from "../../services/books.services";
import { BookDatasource } from "../../services/book.datasource";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {BookDialogComponent} from "../../book-dialog/book-dialog/book-dialog.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  book!: Book;
  dataSource!: BookDatasource;
  displayedColumns = ['title', 'description', 'pageCount', 'publishDate'];


  constructor(private route: ActivatedRoute,
              private bookService: BooksService,
              private dialog: MatDialog) {

  }

  ngOnInit() {

    this.book = this.route.snapshot.data['book'];
    this.dataSource = new BookDatasource((this.bookService));
    this.dataSource.loadBooks();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(BookDialogComponent, dialogConfig)

  }

  ngAfterViewInit() {
  }



}

// import { DataSource } from '@angular/cdk/collections';



