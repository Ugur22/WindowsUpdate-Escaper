/// <reference path="gameObject.ts" />

class WindowsUpdate extends GameObject {
    public behavior: Behavior

    constructor(parent: HTMLElement, x: number, y: number) {
        super();
        this.div = document.createElement("update");
        parent.appendChild(this.div);
        this.speed = 3;
        this.x = x;
        this.y = y;
        this.behavior = new Moving(this.speed, this);
    }

    public draw(): void {
        this.behavior.draw(this);

    }

    public move(): void {
        this.behavior.move(this, this.speed);
    }

}