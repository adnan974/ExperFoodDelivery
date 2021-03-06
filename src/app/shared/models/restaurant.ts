import { Menu } from 'src/app/shared/models/menu';
import { ImageWrapper } from './image-wrapper';

export class Restaurant {
  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _address?: string;
  private _cp?: string;
  private _city?: string;
  private _mainPhotoUrl?: string;
  private _photosUrls?: Array<string>;
  private _menus?: Array<Menu>;

  constructor(
    params: {
      id?: string;
      name?: string;
      description?: string;
      address?: string;
      cp?: string;
      city?: string;
      mainPhotoUrl?: string;
      photosUrls?: Array<string>;
      menus?: Array<Menu>;
    } = {}
  ) {
    this._id = params.id;
    this._name = params.name;
    this._description = params.description;
    this._address = params.address;
    this._cp = params.cp;
    this._city = params.city;
    this._mainPhotoUrl = params.mainPhotoUrl;
    this._photosUrls = params.photosUrls;
    this._menus = params.menus;
  }


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
   * Getter city
   * @return {string}
   */
  public get city(): string | undefined {
    return this._city;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string | undefined) {
    this._city = value;
  }

  /**
  * Getter cp
  * @return {string}
  */
  public get cp(): string | undefined {
    return this._cp;
  }

  /**
   * Setter cp
   * @param {string} value
   */
  public set cp(value: string | undefined) {
    this._cp = value;
  }

  /**
   * Setter mainPhotoUrl
   * @param {string} value
   */
  public set mainPhotoUrl(value: string | undefined) {
    this._mainPhotoUrl = value;
  }

  /**
   * Getter mainPhotoUrl
   * @return {string}
   */
  public get mainPhotoUrl(): string | undefined {
    return this._mainPhotoUrl;
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

  /**
 * Getter menus
 * @return {Array<string>}
 */
  public get menus(): Array<Menu> | undefined {
    return this._menus;
  }

  /**
   * Setter menus
   * @param {Array<string>} value
   */
  public set menus(value: Array<Menu> | undefined) {
    this._menus = value;
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

export interface CreateRestaurantWrapperObject {
  restaurant?: Restaurant;
  arrayImages?: Array<ImageWrapper>;
}


