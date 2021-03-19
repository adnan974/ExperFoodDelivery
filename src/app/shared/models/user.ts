export class User {

  private _id? : number;
  private _lastName?: string;
  private _firstName?: string;
  private _password?: string;
  private _email?: string;
  private _address?: string;
  private _CP?: string;
  private _city?: string;


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
