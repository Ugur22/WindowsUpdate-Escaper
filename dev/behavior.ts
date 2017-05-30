interface Behavior {
    penguin: Penguin;
    draw(object: GameObject): void;
    move(object: GameObject, speed: number): void;
    onKeydown(e: KeyboardEvent): void;
    onKeyUp(e: KeyboardEvent): void
}