export class Restaurant{

    private _id:number;
    private _name:string;
    private _description:string;
    private _address?:string;
    private _photosUrls?:Array<string>;

    constructor(id, name,description, address) {
        this._id = id;
        this._name = name;
        this.description = description;
        this._address = address;
    }


    //Todo à compléter...


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}


  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

 

    /**
     * Getter address
     * @return {string}
     */
	public get address(): string {
		return this._address;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

  /**
  * Setter description
  * @param {string} value
  */
  public set description(value: string) {
    this._description = value;
  }

    /**
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

      /**
     * Getter photos_url
     * @return {Array<string>}
     */
	public get photosUrls(): Array<string> {
		return this._photosUrls;
	}

      /**
     * Setter photos_url
     * @param {Array<string>} value
     */
	public set photosUrls(value: Array<string>) {
		this._photosUrls = value;
	}

  public addPhotoUrl(photoUrl : string) : void {
    this._photosUrls.push(photoUrl);
  }

  public deletePhotoUrl(photoUrl : string) {
    let index = this._photosUrls.indexOf(photoUrl);
    if (index > -1) {
      this._photosUrls.splice(index, 1);
    }
  }



}
