/// <reference path="penguin.ts" />
/// <reference path="sudo.ts" />
/// <reference path="windowsUpdate.ts" />
/// <reference path="utils.ts" />




class Game {

    private penguin: Penguin;
    private update: WindowsUpdate;
    private static instance: Game;
    private updates: Array<WindowsUpdate> = new Array<WindowsUpdate>();
    private gameObjects: Array<GameObject> = new Array<GameObject>();


    private bullets: Array<Sudo> = new Array<Sudo>();
    private container = document.getElementById("container");
    private RandomX: number;


    private constructor() {


        this.gameObjects.push(new Penguin(this.container));
        setInterval(() => {
            this.RandomX = Math.floor(Math.random() * 700) + 1;
            this.gameObjects.push(new WindowsUpdate(this.container, this.RandomX, 0));

        }, 1000);

        requestAnimationFrame(() => this.gameLoop());
    }

    public createBullet() {
        let penguin = this.gameObjects[0];
        this.gameObjects.push(new Sudo(this.container, penguin.x, penguin.y));
    }

    public Reset() {
        this.penguin.removeMe();

    }

    private countWindowsUpdates(): number {
        return this.updates.filter(t => t instanceof WindowsUpdate).length
    };


     private gameLoop() {

        for (let g of this.gameObjects) {
            g.move();
            g.draw();
        }

        requestAnimationFrame(() => this.gameLoop());
    }





    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}


// load
window.addEventListener("load", function () {
    let g: Game = Game.getInstance();
});