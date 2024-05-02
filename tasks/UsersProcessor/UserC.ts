import { User } from '../../types';

export class UserC {
  private _username: string;

  private _email: string;

  private _password: string;

  private _address: string;

  constructor(user: User) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.address = user.address;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get address(): string {
    return this._address;
  }

  public set address(value: string) {
    this._address = value;
  }
}
