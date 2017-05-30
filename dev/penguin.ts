
/// <reference path="gameObject.ts" />

class Penguin extends GameObject {
    public behavior: Behavior

    constructor(parent: HTMLElement) {
        super();
        this.div = document.createElement("penguin");
        parent.appendChild(this.div);
        this.speed = 30;
        this.x = this.container.offsetWidth / 2 - 130;
        this.y = 520;
        this.height = 70;
        this.width = 70;
        this.behavior = new Moving(this.speed);
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.keyCode == 65) {
            this.x = this.x - this.speed;
        }
        else if (e.keyCode == 68) {
            this.x = this.x + this.speed;
        }
        else if (e.keyCode == 32) {
            let b = new Sudo(this.container, this.x, this.y)
            Game.getInstance().createBullet(b);

        }
    }


    private onKeyUp(e: KeyboardEvent): void {
        if (this.onKeyUp) {
        }

    }


    public draw(): void {
        this.behavior.draw(this);

    }
}