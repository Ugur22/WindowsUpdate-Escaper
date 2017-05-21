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
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";

    }

    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";

    }
}