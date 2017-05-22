interface Behavior {
    penguin: Penguin;
    draw(object): void;
    move(object, speed): void;
    onKeydown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void
}