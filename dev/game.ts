/// <reference path="penguin.ts" />
/// <reference path="sudo.ts" />
/// <reference path="windowsUpdate.ts" />



class Game {

    private penguin: Penguin;
    private sudo: Sudo;
    private updates: Array<WindowsUpdate> = new Array<WindowsUpdate>();


    constructor() {
        let container = document.getElementById("container");
        this.penguin = new Penguin(container);
        this.sudo = new Sudo(container);
        for (let i = 1; i <= 5; i++) {
            this.updates.push(new WindowsUpdate(container, i * 100, 0));
        }



        requestAnimationFrame(() => this.gameLoop());
    }
    

    private gameLoop() {
        this.penguin.draw();
        this.sudo.draw();

        for (let u of this.updates) {
            u.draw();
            u.move();
        }


        requestAnimationFrame(() => this.gameLoop());
    }
}


// load
window.addEventListener("load", function () {
    let g: Game = new Game();
});