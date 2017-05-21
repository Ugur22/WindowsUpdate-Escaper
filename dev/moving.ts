class Moving implements Behavior {

    private speed: number;


    public penguin: Penguin;
    constructor(s: number, object) {

        this.speed = s;
    }


    public onKeydown(e: KeyboardEvent, object) {
        if (e.keyCode == 65) {
            object.x = object.x - 30;
        }
        else if (e.keyCode == 68) {
            object.x = object.x + 30;
        }

    }

    move(object: any): void {
        object.y = object.y + 1;
        if (object.y > 600) {
            object.y = 50;
        }
    }

    public draw(object) {
        object.div.style.transform = "translate(" + object.x + "px, " + object.y + "px)";

    }


}