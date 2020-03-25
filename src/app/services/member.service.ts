import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Member} from '../models/member.model';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class MemberService {
  endpoint: string =  environment.APIEndpoint;
  private member: Member[] = [];
  memberSubject = new Subject<any[]>();

  private members = [] ;

  emitMemberSubject() {
    console.log(this.members)
    this.memberSubject.next(this.members.slice());
  }
  addMember(member: Member) {
    this.saveMember(member);
  }

  getMembers() {
    this.httpClient
      .get<any[]>(this.endpoint + '/members')
      .subscribe(
        (response) => {
          this.members = response;
          this.emitMemberSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveMember(member: Member) {
    this.httpClient
      .post(this.endpoint + '/saveMember', member)
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
