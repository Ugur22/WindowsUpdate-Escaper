/// <reference path="gameObject.ts" />


class Sudo extends GameObject {
    public behavior: Behavior

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("sudo");
        parent.appendChild(this.div);
        this.speed = 0;
        this.x = 90;
        this.y = 50;
        this.behavior = new Moving(this.speed, this);


    }

    public draw(): void {
        this.behavior.draw(this);
    }
}