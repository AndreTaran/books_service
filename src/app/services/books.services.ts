import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { Book } from "../models/book";

@Injectable()
export class BooksService {
    constructor(private http: HttpClient) {
    }

    findAllBooks() {
        return this.http.get<Book[]>('https://fakerestapi.azurewebsites.net/api/v1/Books');
            // .pipe(
            //     map(res => {
                    
            //     })
            // )
    }


}

