namespace Gameobjects {


    export class WindowsUpdate extends GameObject implements Observer {



        public observers: Array<Observer> = new Array<Observer>();
        public behavior: Behavior

        constructor(parent: HTMLElement, x: number, y: number, s: Subject) {
            super();
            s.subscribe(this);
            this.div = document.createElement("update");
            parent.appendChild(this.div);
            this.speed = 1;
            this.x = x;
            this.y = y;
            this.height = 30;
            this.width = 30;
            this.behavior = new Behaviours.Moving(this.speed);
        }

        public draw(): void {
            this.behavior.draw(this);

        }

        public move(): void {
            this.behavior.move(this, this.speed);
        }

        notify(): void {
           this.speed = 5;
           this.x = this.x + 20;
        }




    }

}