import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Booking} from '../models/booking.model';
import {BookingService} from '../services/booking.service';

@Component({
  selector: 'app-booking-personnal',
  templateUrl: './booking-personal.component.html',
  styleUrls: ['./booking-personal.component.scss']
})
export class BookingPersonalComponent implements OnInit {
  bookings: any[];
  bookingsSubscription: Subscription;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getBooking();
    this.bookingsSubscription = this.bookingService.bookingSubject.subscribe(
      (bookings: any[]) => {
        this.bookings = bookings;
      }
    );
    this.bookingService.emitBookSubject();
  }

  onSave(booking: Booking ) {
    this.bookingService.saveBooking(booking);
  }


}
