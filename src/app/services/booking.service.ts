import { Injectable} from '@angular/core';
import {Booking} from '../models/booking.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class BookingService {
  private booking: Booking[] = [];
  bookingSubject = new Subject<any[]>();

  private bookings = [] ;

  emitBookSubject() {
    this.bookingSubject.next(this.bookings.slice());
  }
  addBooking(booking: Booking) {
    // this.book.push(book);
    this.saveBooking(booking);
  }

  getBooking() {
    this.httpClient
      .get<any[]>('http://localhost:8080/bookings')
      .subscribe(
        (response) => {
          this.booking = response;
          this.emitBookSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveBooking(booking: Booking) {
    this.httpClient
      .post('http://localhost:8080/saveBooking', booking)
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
