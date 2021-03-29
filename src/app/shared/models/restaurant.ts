export class Restaurant {
  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _address?: string;
  private _photosUrls?: Array<string>;

  constructor(
    params: {
      id?: string;
      name?: string;
      description?: string;
      address?: string;
      photosUrls?: Array<string>;
    } = {}
  ) {
    this._id = params.id;
    this._name = params.name;
    this._description = params.description;
    this._address = params.address;
    this._photosUrls = params.photosUrls;
  }

  //Todo à compléter...

  /**
   * Getter id
   * @return {string}
   */
  public get id(): string | undefined {
    return this._id;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string | undefined) {
    this._id = value;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string | undefined {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string | undefined) {
    this._name = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string | undefined {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string | undefined) {
    this._description = value;
  }

  /**
   * Getter address
   * @return {string}
   */
  public get address(): string | undefined {
    return this._address;
  }

  /**
   * Setter address
   * @param {string} value
   */
  public set address(value: string | undefined) {
    this._address = value;
  }

  /**
   * Getter photos_url
   * @return {Array<string>}
   */
  public get photosUrls(): Array<string> | undefined {
    return this._photosUrls;
  }

  /**
   * Setter photos_url
   * @param {Array<string>} value
   */
  public set photosUrls(value: Array<string> | undefined) {
    this._photosUrls = value;
  }

  public addPhotoUrl(photoUrl: string): void {
    this._photosUrls && this._photosUrls.push(photoUrl);
  }

  public deletePhotoUrl(photoUrl: string) {
    if (this._photosUrls) {
      let index = this._photosUrls.indexOf(photoUrl);
      index > -1 && this._photosUrls.splice(index, 1);
    }
  }
}
