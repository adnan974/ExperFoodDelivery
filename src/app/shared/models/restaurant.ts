export class Restaurant{
    
    private _id:number;
    private _name:string;
    private _address:string;

    constructor(id, name, address) {
        this._id = id;
        this._name = name;
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
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

}