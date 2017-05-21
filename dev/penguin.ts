
/// <reference path="gameObject.ts" />

class Penguin extends GameObject {
    public direction: string;
    private sudo: Sudo;
    public behavior: Behavior

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("penguin");
        let container = document.getElementById("container");
        parent.appendChild(this.div);
        this.speed = 0;
        this.x = container.offsetWidth / 2 - 130;
        this.y = 520;
        this.behavior = new Moving(this.speed, this);
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    }

    private onKeyDown(e: KeyboardEvent): void {
        this.behavior.onKeydown(e,this);

    }


    public draw(): void {
        this.behavior.draw(this);

    }
}