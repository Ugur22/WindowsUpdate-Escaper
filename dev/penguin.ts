namespace Gameobjects {
    export class Penguin extends GameObject implements Subject {

        public observers: Array<Observer> = new Array<Observer>();


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
            this.behavior = new Behaviours.Moving(this.speed);
            window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
            window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        }


        private onKeyDown(e: KeyboardEvent): void {
            if (e.keyCode == Keys.LEFT) {
                this.x = this.x - this.speed;
                this.sendNotifications();
            }
            else if (e.keyCode == Keys.RIGHT) {
                this.x = this.x + this.speed;
                this.sendNotifications();
            }
            else if (e.keyCode == Keys.SHOOT) {
                Game.getInstance().createBullet();

            }
        }


        private onKeyUp(e: KeyboardEvent): void {
            if (this.onKeyUp) {
            }

        }


        public draw(): void {
            this.behavior.draw(this);

        }

        private sendNotifications(): void {
            for (let i = this.observers.length - 1; i > -1; i--) {
                this.observers[i].notify();
            }
        }

        public subscribe(o: Observer): void {
            this.observers.push(o);
        }
        public unsubscribe(o: Observer): void {
            let i: number = this.observers.indexOf(o);
            if (i != -1) {
                this.observers.splice(i, 1);
            }
        }


    }
}
