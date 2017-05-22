/// <reference path="gameObject.ts" />


class Sudo extends GameObject {
    public behavior: Behavior

    constructor(parent: HTMLElement, x: number, y: number) {
        super();
        this.div = document.createElement("sudo");
        parent.appendChild(this.div);
        this.speed = -10;
        this.x = x;
        this.y = y;
        this.behavior = new Moving(this.speed, this);
    }

    public move(): void {
        this.behavior.move(this, this._speed);
    }

    public draw(): void {
        this.behavior.draw(this);
    }
}