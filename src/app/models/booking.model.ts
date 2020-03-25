import {Book} from './book.model';
import {Member} from './member.model';

export interface Booking {
   book: Book;
   member: Member;
}
