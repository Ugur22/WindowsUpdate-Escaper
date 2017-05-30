class Moving implements Behavior {
    private speed: number;


    public penguin: Penguin;


    constructor(s: number) {
        this.speed = s;
    }


    public onKeydown(e: KeyboardEvent) {


    }

    public onKeyUp(e: KeyboardEvent) {

    }

    move(object: GameObject, speed): void {
        object.y = object.y + speed;
    }


    public draw(object: GameObject) {
        object.div.style.transform = "translate(" + object.x + "px, " + object.y + "px)";

    }


}