export class User {

  private _id? : number;
  private _lastName?: string;
  private _firstName?: string;
  private _password?: string;
  private _email?: string;
  private _address?: string;
  private _CP?: string;
  private _city?: string;

  
  //constructor(id,lastname, firstname, password, email, address, cp, city) {
    //this._id = id;
   // this._lastName = lastname;
    //this._firstName = firstname;
   // this._password = password;
   // this._email = email;
   // this._address = address;
   // this._CP = cp;
   // this._city = city;

 // }
  //constructor(options: {
   // id?: number,
   // lastName?: string,
   // firstName?: string,
   // password?: string,
   // email?: string,
   // address?: string,
   // CP?: string,
   // city?: string,

  //} = {}) {
   // this._id = options.id || undefined;
   // this._lastName = options.lastName || undefined;
   // this._firstName = options.firstName || undefined;
   // this._password = options.password || undefined;
   // this._email = options.email || undefined;
   // this._address = options.address || undefined;
   // this._CP = options.CP || undefined;
  //  this._city = options.city || undefined;
 // }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
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
