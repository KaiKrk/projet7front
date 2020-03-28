import { Injectable} from '@angular/core';
import {Booking} from '../models/booking.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';


@Injectable()
export class BookingService {

  endpoint: string =  environment.APIEndpoint;

  private booking: Booking[] = [];
  bookingSubject = new Subject<any[]>();

  private bookings = [] ;

  emitBookingSubject() {
    this.bookingSubject.next(this.bookings.slice());
  }
  addBooking(booking: Booking) {
    this.saveBooking(booking);
  }

    getBooking(memberId: number) {
    this.httpClient
      .post<any[]>(this.endpoint + '/myBookings', {memberId})
      .subscribe(
        (response) => {
          this.bookings = response;
          this.emitBookingSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveBooking(booking: Booking) {
    this.httpClient
      .post(this.endpoint + '/saveBooking', booking)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log(booking);
          console.log('Erreur ! : ' + error);
        }
      );
  }

  extendBooking(booking: Booking) {
    this.httpClient
      .post( this.endpoint + '/extendBooking', booking)
      .subscribe(
        () => {
          console.log('Renouvellement terminé !');
        },
        (error) => {
          console.log(booking);
          console.log('Erreur ! : ' + error);
        }
      );
  }

  constructor(private httpClient: HttpClient) {
  }
}
