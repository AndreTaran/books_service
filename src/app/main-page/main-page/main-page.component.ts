import {AfterViewInit, Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { ViewChild } from "@angular/core";
import { Book } from "../../models/book";
import { BooksService } from "../../services/books.services";
import { BookDatasource } from "../../services/book.datasource";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {BookDialogComponent} from "../../book-dialog/book-dialog/book-dialog.component";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  book!: Book;
  dataSource!: BookDatasource;
  displayedColumns = ['title', 'description', 'pageCount', 'publishDate'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

    let temp = this.dataSource['bookSubject'].value.slice(-1)[0].id + 1;
    dialogConfig.data = {
      id: this.dataSource['bookSubject'].value.slice(-1)[0].id + 1,
      title: '',
      description: '',
      pageCount: 0,
      excerpt: '',
      publishDate: ''
    };
    console.log(this.dataSource['bookSubject'].value.slice(-1)[0].id);
    
    // this.dialog.open(BookDialogComponent, dialogConfig)

    const dialogRef = this.dialog.open(BookDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        let body = {id: temp, 
                    title: data.title,
                    description: data.description,
                    pageCount: data.pageCount,
                    excerpt: data.excerpt,
                    publishDate: data.publishDate
                  };
        this.bookService.createBook(body);    
    })
  }

  editDialog({id, title, description, pageCount, publishDate, excerpt}: Book) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id, title, description, pageCount, publishDate, excerpt
    };

    // this.dialog.open(BookDialogComponent, dialogConfig)

    const dialogRef = this.dialog.open(BookDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        let body = {id: id,
                    title: data.title, 
                    description: data.description, 
                    pageCount: data.pageCount, 
                    excerpt: data.excerpt, 
                    publishDate: data.publishDate
                  };
        this.bookService.updateBook(id, body);
      }
    )
  }

  ngAfterViewInit() {
    // this.paginator.page
    //   .pipe(
    //     tap(() => this.loadPage())
    //   )
    //   .subscribe()
  }

  loadPage() {
    this.dataSource.loadBooks()
  }



}

// import { DataSource } from '@angular/cdk/collections';



