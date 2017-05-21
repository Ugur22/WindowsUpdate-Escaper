abstract class GameObject {
    protected _div: HTMLElement;
    protected _speed: number;
    protected _x: number;
    protected _y: number;

    constructor() { }


    public get div(): HTMLElement {
        return this._div;
    }


    public set div(v: HTMLElement) {
        this._div = v;
    }

    public get x(): number {
        return this._x;
    }

    public set x(v: number) {
        this._x = v;
    }


    public get y(): number {
        return this._y;
    }

    public set y(v: number) {
        this._y = v;
    }


    public get speed(): number {
        return this._speed;
    }

    public set speed(v: number) {
        this._speed = v;
    }


}