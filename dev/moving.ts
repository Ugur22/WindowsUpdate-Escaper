class Moving implements Behavior {



    private speed: number;


    public penguin: Penguin;
    public sudo: Sudo;
    private container = document.getElementById("container");


    constructor(s: number, object) {
        this.speed = s;
    }


    public onKeydown(e: KeyboardEvent) {


    }

    public onKeyUp(e: KeyboardEvent) {

    }

    move(object: any, speed): void {
        object.y = object.y + speed;
    }


    public draw(object) {
        object.div.style.transform = "translate(" + object.x + "px, " + object.y + "px)";

    }


}