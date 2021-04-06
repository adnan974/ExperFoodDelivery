import { ImageWrapper } from "./image-wrapper";

export class Menu {
  private _id?: number;
  private _name?: string;
  private _description?: string;
  private _price?: number;


  constructor(
    params: {
      id?: number;
      name?: string;
      description?: string;
      price?: number;
    } = {}
  ) {
    this._id = params.id;
    this._name = params.name;
    this._description = params.description;
    this._price = params.price;
  }

  // TODO : Ingredient

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number | undefined) {
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
   * Getter price
   * @return {number}
   */
  public get price(): number | undefined {
    return this._price;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number | undefined) {
    this._price = value;
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
}

export interface CreateMenuWrapperObject {
  menu?: Menu;
  arrayImages?: Array<ImageWrapper>;
}
