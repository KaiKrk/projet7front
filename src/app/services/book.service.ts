import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from '../models/book.model';

@Injectable()
export class BookService {
  private book: Book[] = [];
  bookSubject = new Subject<any[]>();

  private books = [] ;

  emitBookSubject() {
    console.log(typeof this.books)
    this.bookSubject.next(this.books.slice());
  }
  addBook(book: Book) {
  // this.book.push(book);
  this.saveBooks(book);
  // this.emitBookSubject();
  }

  getBooks() {
    this.httpClient
      .get<any[]>('http://localhost:8080/books')
      .subscribe(
        (response) => {
          this.books = response;
          this.emitBookSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveBooks(book: Book) {
    this.httpClient
      .post('http://localhost:8080/saveBook', book)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  constructor(private httpClient: HttpClient) {
  }
}
