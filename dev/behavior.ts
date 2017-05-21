interface Behavior {
    penguin: Penguin;
    draw(object): void;
    move(object): void;
    onKeydown(e: KeyboardEvent, object): void;
}