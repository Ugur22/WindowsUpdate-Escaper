/// <reference path="penguin.ts" />
/// <reference path="sudo.ts" />
/// <reference path="windowsUpdate.ts" />
/// <reference path="utils.ts" />




class Game {

    private penguin: Penguin;
    private update: WindowsUpdate;
    private static instance: Game;
    private updates: Array<WindowsUpdate> = new Array<WindowsUpdate>();
    // private gameObjects: Array<GameObject> = new Array<GameObject>();
    // gameobjects.push(new Penguin());
    // for(let g of this.gameObjects){
    //     g.move();
    // }

    private bullets: Array<Sudo> = new Array<Sudo>();
    private container = document.getElementById("container");
    private RandomX: number;


    constructor() {

        this.penguin = new Penguin(this.container);

        setInterval(() => {
            this.RandomX = Math.floor(Math.random() * 700) + 1;
            this.updates.push(new WindowsUpdate(this.container, this.RandomX, 0));
        }, 500);

        // for (let i = 1; i <= 5; i++) {
        //     this.updates.push(new WindowsUpdate(this.container, i * 100, 0));
        // }

        requestAnimationFrame(() => this.gameLoop());
    }

    public createBullet(b: Sudo) {
        this.bullets.push(b);
    }


    private gameLoop() {
        this.penguin.draw();

        for (let b of this.bullets) {
            b.move();
            b.draw();
            for (let u of this.updates) {

                if (Utils.checkCollision(b, u)) {
                    b.removeMe();
                    Utils.removeObject(b, this.bullets);

                    u.removeMe();
                    Utils.removeObject(u, this.updates);
                }
                if (b.y < 0) {
                    b.removeMe();
                    Utils.removeObject(b, this.bullets);
                }
            }
        }
        for (let u of this.updates) {


            if (Utils.checkCollision(u, this.penguin)) {
                console.log("hit");
                this.penguin.removeMe();
            }
            u.draw();
            u.move();



            if (u.y > 600) {
                u.removeMe();
                Utils.removeObject(u, this.updates);
            }
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