/// <reference path="greensock.d.ts"/>
/// <reference path="utils.ts"/>

class Game {

    private penguin: Gameobjects.Penguin;
    private update: Gameobjects.WindowsUpdate;
    private static instance: Game;
    private updates: Array<Gameobjects.WindowsUpdate> = new Array<Gameobjects.WindowsUpdate>();
    private gameObjects: Array<GameObject> = new Array<GameObject>();
    private health_text = document.getElementById("health");
    private score: number = 0;
    private counter: number = 0;




    private bullets: Array<Gameobjects.Sudo> = new Array<Gameobjects.Sudo>();
    private container = document.getElementById("container");
    private RandomX: number;
    private health: number = 3;
    private dead = false;

    private constructor() {
        this.penguin = new Gameobjects.Penguin(this.container);




        let title = document.getElementById("title");
        title.innerHTML = "WindowsUpdate-Escaper";
        TweenLite.to(title, 2, { left: "250px", borderBottomColor: "#90e500", color: "white" });

        requestAnimationFrame(() => this.gameLoop());
    }

    public createBullet() {
        this.bullets.push(new Gameobjects.Sudo(this.container, this.penguin.x, this.penguin.y));
    }

    public Reset() {
        this.penguin.removeMe();

    }

    private countWindowsUpdates(): number {
        return this.updates.filter(t => t instanceof Gameobjects.WindowsUpdate).length
    };


    private gameLoop() {
        this.counter++;
        if (this.counter > 60) {

            this.health_text.innerHTML = "Health:" + this.health;
            this.counter = 0;
            this.RandomX = Math.floor(Math.random() * 700) + 1;
            this.gameObjects.push(new Gameobjects.WindowsUpdate(this.container, this.RandomX, 0, this.penguin));

        }

        this.penguin.move();
        this.penguin.draw();

        for (let b of this.bullets) {
            b.move();
            b.draw();

            if (b.y < 0) {
                b.removeMe();
                Util.Utils.removeObject(b, this.bullets);
            }
        }

        for (let g of this.gameObjects) {
            if (g.y > 600) {
                g.removeMe();
                Util.Utils.removeObject(g, this.gameObjects);
            }
        }



        for (let g of this.gameObjects) {

            if (Util.Utils.checkCollision(this.penguin, g)) {
                console.log("hit");
                this.health--;
                // this.penguin.removeMe();
                g.removeMe();
                Util.Utils.removeObject(g, this.gameObjects);
            }

            if (this.health <= 0) {

                let gameOver = document.createElement("gameover");
                this.container.appendChild(gameOver);
                TweenLite.to(gameOver, 2, { y: 300, x: 200, ease: Bounce.easeOut });
                this.dead = true;

            }

            for (let b of this.bullets) {
                if (Util.Utils.checkCollision(b, g)) {

                    b.removeMe();
                    Util.Utils.removeObject(b, this.bullets);

                    g.removeMe();
                    Util.Utils.removeObject(g, this.updates);

                }

            }

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