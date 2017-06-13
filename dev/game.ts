/// <reference path="greensock.d.ts"/>
/// <reference path="utils.ts"/>

class Game {

    private penguin: Gameobjects.Penguin;
    private update: Gameobjects.WindowsUpdate;
    private static instance: Game;
    private updates: Array<Gameobjects.WindowsUpdate> = new Array<Gameobjects.WindowsUpdate>();
    private gameObjects: Array<GameObject> = new Array<GameObject>();
    private score: number = 5;




    private bullets: Array<Gameobjects.Sudo> = new Array<Gameobjects.Sudo>();
    private container = document.getElementById("container");
    private RandomX: number;
    private dead = false;

    private constructor() {
        this.penguin = new Gameobjects.Penguin(this.container);
        this.gameObjects.push(this.penguin);
        setInterval(() => {



            // let gameOver = document.getElementById("gameover");
            // gameOver.innerHTML = "Game Over<br>Score: " + this.score;

            let title = document.getElementById("title");
            title.innerHTML = "WindowsUpdate-Escaper";
            TweenLite.to(title, 2, { left: "250px", borderBottomColor: "#90e500", color: "white" });

            this.RandomX = Math.floor(Math.random() * 700) + 1;
            this.gameObjects.push(new Gameobjects.WindowsUpdate(this.container, this.RandomX, 0, this.penguin));

        }, 1000);

        requestAnimationFrame(() => this.gameLoop());
    }

    public createBullet() {
        this.gameObjects.push(new Gameobjects.Sudo(this.container, this.penguin.x, this.penguin.y));
    }

    public Reset() {
        this.penguin.removeMe();

    }

    private countWindowsUpdates(): number {
        return this.updates.filter(t => t instanceof Gameobjects.WindowsUpdate).length
    };


    private gameLoop() {

        for (let g of this.gameObjects) {



            // if (Util.Utils.checkCollision((g), g)) {
            //     console.log("hit");
            // }

            g.move();
            g.draw();

        }



        if (!this.dead) requestAnimationFrame(() => this.gameLoop());
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
    Game.getInstance();
});