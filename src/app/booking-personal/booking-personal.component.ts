import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Booking} from '../models/booking.model';
import {BookingService} from '../services/booking.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-booking-personnal',
  templateUrl: './booking-personal.component.html',
  styleUrls: ['./booking-personal.component.scss']
})
export class BookingPersonalComponent implements OnInit {
  bookings: any[];
  bookingsSubscription: Subscription;
  private name: string;

  constructor(private bookingService: BookingService, private authenticationService: AuthService) { }

   currentUser = this.authenticationService.currentUserValue;
  ngOnInit() {
    this.bookingService.getBooking(this.currentUser.id);
    console.log(this.currentUser.id);
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
