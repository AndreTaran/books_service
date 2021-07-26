import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { Book } from "../models/book";
import { BooksService } from "./books.services";


export class BookDatasource implements DataSource<Book> {
  private bookSubject = new BehaviorSubject<Book[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private bookService: BooksService) {
  }

  loadBooks() {
    this.loadingSubject.next(true);

    this.bookService.findAllBooks()
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(books => this.bookSubject.next(books))
  }

  connect(collectionViewer: CollectionViewer) {
    console.log('connecting data');
    return this.bookSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer) {
    this.bookSubject.complete();
    this.loadingSubject.complete();
  }

}

