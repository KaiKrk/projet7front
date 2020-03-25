import {Book} from './book.model';
import {Member} from './member.model';

export class Booking {
  constructor(public book: Book,
              public member: Member,
              public borrowingDate = new Date(),
              public returnDate =  new Date()
             ) {
  }
}
