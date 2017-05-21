# PRG08-Week3-oefening1

## Startcode

- De car class bevat methods en statements voor drie soorten gedrag: `driving()`, `jumping()`, `crashing()`
- De car heeft een property `state` en een `switch` block waarmee je van gedrag kan wisselen.

## Opdracht

- Verwijder de `state` property en alle code die het gedrag beschrijft of checked.
- Verplaats de gedrag code naar drie strategy classes. 
- De car krijgt in de constructor als eerste het 'driving' gedrag : `this.mybehavior = new Driving()`
- Plaats een keyboard listener in de 'driving' class. Na een keypress verandert het gedrag in 'jumping'.
- Plaats een keyboard listener in de 'Driving' class. Na een keypress geef je het 'Jumping' gedrag aan de auto. Let op dat je de keyboard listener ook verwijdert.
- In de 'jumping' class is geen keyboard listener. De update loop kijkt of de auto geland is, en geeft daarna het "Crashing" gedrag aan de auto.

## Optioneel

- Maak de game class een singleton met een gameOver method
- Maak een array met blocks in game.ts. Er blijven telkens blocks van rechts het beeld in komen.
- Na het springen verandert de behavior weer in driving.
- Als de auto een block raakt crash je. Gebruik de collision detection functie.
- Toon een score. Je score blijft optellen zo lang je niet crashed.

## Strategy Pattern Voorbeeld

```
class Person {
    private myBehavior:Behavior;
    constructor(){
        this.myBehavior = new Jump(this);
        this.myBehavior.execute();
    }
}

class Jump implements Behavior {
    public person : Person;
    constructor(p:Person){
        this.person = p;
    }
    public execute(){
        console.log("I am jumping!!!");
    }
}

interface Behavior {
    person:Person;
    execute() : void;
}
```

### Event Listeners toevoegen en verwijderen

Als je een listener aan window toevoegt, dan blijft die listener altijd bestaan, zelfs als je game object wordt verwijderd.
Het is beter om listeners te verwijderen als je ze niet meer nodig hebt.

```
class Test {
    private callback:EventListener;

    constructor(){
        // we slaan de functie op in een variabele
        this.callback = (e:KeyboardEvent) => this.keyWasPressed(e);

        // listener toevoegen
        window.addEventListener("keydown", this.callback);
    }

    private keyWasPressed(e:KeyboardEvent):void {
        // omdat de functie in een variabele zit kan je removeEventListener doen
        window.removeEventListener("keydown", this.callback);
    }
}
```
