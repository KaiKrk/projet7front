import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberService} from '../services/member.service';
import {Router} from '@angular/router';
import {Booking} from '../models/booking.model';
import {BookingService} from '../services/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {



  bookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookingService: BookingService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.bookingForm = this.formBuilder.group(
      {
        book: ['', Validators.required],
        member: ['', Validators.required],
      }
    );
  }
  onSubmitForm() {
    const formValue =  this.bookingForm.value;
    const newBooking = new Booking(
      formValue.book,
      formValue.member
    );
    console.log(newBooking);
    this.bookingService.addBooking(newBooking);
    this.router.navigate(['/']);
  }

}
