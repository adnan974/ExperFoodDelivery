export enum UserRole {
  Customer = "Customer",
  Restorer = "Restorer",
  Admin = "Admin",
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

  constructor(
    params: {
      id?: number;
      lastname?: string;
      firstname?: string;
      role?: UserRole;
      email?: string;
      address?: string;
      CP?: string;
      city?: string;
      phone?: string;
    } = {}
  ) {
    this._id = params.id;
    this._lastname = params.lastname;
    this._firstname = params.firstname;
    this._role = params.role;
    this._email = params.email;
    this._address = params.address;
    this._CP = params.CP;
    this._city = params.city;
    this._phone = params.phone;
  }

  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  public get role(): UserRole | undefined {
    return this._role;
  }

  public set role(value: UserRole | undefined) {
    this._role = value;
  }

  public get phone(): string | undefined {
    return this._phone;
  }

  public set phone(value: string | undefined) {
    this._phone = value;
  }

  public get lastname(): string | undefined {
    return this._lastname;
  }
  public set lastname(value: string | undefined) {
    this._lastname = value;
  }
  public get firstname(): string | undefined {
    return this._firstname;
  }
  public set firstname(value: string | undefined) {
    this._firstname = value;
  }
  public get password(): string | undefined {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public get email(): string | undefined {
    return this._email;
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public get address(): string | undefined {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public get CP(): string | undefined {
    return this._CP;
  }
  public set CP(value: string | undefined) {
    this._CP = value;
  }
  public get city(): string | undefined {
    return this._city;
  }
  public set city(value: string | undefined) {
    this._city = value;
  }
}
