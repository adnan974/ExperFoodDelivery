export enum UserRole {
  Customer,
  Restorer,
  Admin
}

export class User {

  private _id?: number;
  private _lastname?: string;
  private _firstname?: string;
  private _role?: UserRole;
  private _email?: string;
  private _password?: string;
  private _address?: string;
  private _CP?: string;
  private _city?: string;
  private _phone?: string;

  constructor(params: {
    id?: number,
    lastname?: string,
    firstname?: string,
    role?: UserRole,
    email?: string,
    address?: string,
    CP?: string,
    city?: string,
    phone?: string,
  } = {}) {
    this.id = params.id || undefined;
    this.lastname = params.lastname || undefined;
    this.firstname = params.firstname || undefined;
    this.role = params.role || undefined;
    this.email = params.email || undefined;
    this.address = params.address || undefined;
    this.CP = params.CP || undefined;
    this.city = params.city || undefined;
    this.phone = params.phone || undefined;
  }


  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get role(): UserRole {
    return this._role;
  }

  public set role(value: UserRole) {
    this._role = value;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  public get lastname(): string {
    return this._lastname;
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
  public get firstname(): string {
    return this._firstname;
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get address(): string {
    return this._address;
  }
  public set address(value: string) {
    this._address = value;
  }
  public get CP(): string {
    return this._CP;
  }
  public set CP(value: string) {
    this._CP = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }

}
