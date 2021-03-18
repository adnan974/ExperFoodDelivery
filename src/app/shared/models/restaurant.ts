export class Restaurant{
    
    private _id:number;
    private _name:string;
    private _adress:string;
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
     * Getter adress
     * @return {string}
     */
	public get adress(): string {
		return this._adress;
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
     * Setter adress
     * @param {string} value
     */
	public set adress(value: string) {
		this._adress = value;
	}

}