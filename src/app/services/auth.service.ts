import {Injectable} from '@angular/core';
import {AuthModel} from '../models/auth.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Member} from '../models/member.model';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class AuthService {

endpoint: string =  environment.APIEndpoint;

  // connect(auth: AuthModel) {
  // this.httpClient
  //   .post('http://localhost:8080/authenticate', auth)
  //   .subscribe(
  //     (response) => {
  //
  //       console.log('Enregistrement terminé !');
  //     },
  //     (error) => {
  //       console.log('Erreur ! : ' + error);
  //     }
  //   );
  // }
  private currentUserSubject: BehaviorSubject<Member>;
  public currentUser: Observable<Member>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Member>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Member {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(this.endpoint + '/authenticate', { email, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
