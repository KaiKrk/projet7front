export class Member {
  constructor(public name: string,
              public surname: string,
              public email: string,
              public password: string,
              public token?: string) {
  }
}
