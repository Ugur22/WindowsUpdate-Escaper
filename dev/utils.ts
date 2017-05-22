class Utils {
    public static checkCollision(object1: GameObject, object2: GameObject): boolean {

        // console.log(object1.x , object1.width, object2.x, object2.height);

        return (object1.x < object2.x + object2.width &&
            object1.x + object1.width > object2.x &&
            object1.y < object2.y + object2.height &&
            object1.height + object1.y > object2.y)
    }
}