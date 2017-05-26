# PRG08-week4-Deel-Game
![alt tag](https://cdn4.iconfinder.com/data/icons/christmas-cheer-volume-i-1/64/penguin-128.png)<br />

## introduction
Windows-updateEscaper is an awesome game to show how much Windows sucks. As the linux pinguin it's your task to destroy as many windows updates as possible to install Linux and avoid Windows being installed.


## UML Classdiagram 
![alt tag](http://i.imgur.com/qccGVFv.jpg)<br />

#### the following tools are needed to correctly run this project. If you already have them set up you can skip this part and start with cloning and installing the game

## installation Node.js for Windows
Visit https://nodejs.org/en/download/ and download Windows Installer (.msi). After downloading you follow the wizard to install.

## installation Node.js for Linux
Visit https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions. Follow the instructions to install via terminal.

## installation Typescript
Visit https://www.typescriptlang.org/#download-links and install by typing the following into the command line:
npm install -g typescript

## install Visual Code
Visit https://code.visualstudio.com/ and download the package. When done install it and you should be done
Open your project in Visual Code and run your project by pressing ctrl + shift + B. Your typescript code should me compiled to JS. Every change will be shown in the browser

## installation game
To install this game clone the project.
git clone https://github.com/Ugur22/WindowsUpdate-Escaper.git

### For windows
Move the cloned folder to your xammp/htdocs folder. Turn on the apache server en type localhost/Windows-updateEscaper/dist/. The game should be running in the browser now. Enjoy!.

### For linux
Move the cloned folder to your var/www/html folder. Type localhost/Windows-updateEscaper/dist/. The game should be running in the browser now. Enjoy!.

### visit the game at: [WindowsUpdate-Escaper](http://178.62.251.155/dist/)

## Programmaming principles
This project has been written in OOP Typescript using the following principles
#### interface - I have used Behavior.ts as my interface. this interface consists out of the following methods:
draw(object): void;
move(object, speed): void;
onKeydown(e: KeyboardEvent): void;
onKeyUp(e: KeyboardEvent): void
#### static utility method:
I have created a Util.ts class where all my static methods are declared. I primarily use these methods in Game.ts to check if objects collide.
#### singleton
In Game.ts I made in instance of method. With this I can easily access methdos of Game.ts outside of the class itself. I used it to access the createbullet method so whenever a player presses the spacebar it will create a bullet
#### strategy
I created a Moving.ts class which in turn implements behavior.ts and gets all the methdos from that interface. I use this methods in various gameobjects to easily add behavior without the needs of many ifs.
#### Inheritance
I created GameObjects.ts which has all the attributes that a gameobject needs. the penguin , sudo and windowsUpdate class enherit from this class so they can access all these properties
#### Composition
The Game.ts has a relationship with all the different kind of gameobjects like penguin, sudo and windowsUpdate class. That's where the composition takes place.
#### Encapsulation
In the Gameobjects class I added a getter and setter for all properties so they are not easily accessible from the outside. All properties are private.

## Beoordeling

* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Klassendiagram: Goed, probeer alleen geen lijntjes over elkaar te tekenen
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) README: Heel goed
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Interface: Aanwezig
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Static Utils Method: Aanwezig
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Singleton: Game heeft de getInstance method en de static refrence, maar je contructor van Game is public. Hierdoor kan iedereen nog steeds instanties aanmaken en is meer een multiton ipv een singleton
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Strategy: Aanwezig, maar met maar 1 inplementatie is het niet echt heel nuttig en mis je de logica rondom het wisselen van strategies. (en geef object voor draw en move in Behavior een type mee ipv een implicit any)
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Encapsulation: goed
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Composition: goed
* ![vinkje](https://www.treant.nl/uploads/bestanden/b8ce6cb8-e3f5-473a-8363-ad7ea4ef462b/2965896820/Groen%20vinkje.jpg) Inherance: Goed, met GameObject en Penguin/Sudo/WindowsUpdate

### Eindoordeel:
Voldoende, er is aan alle eisen voldaan. Echter zijn er een paar dingen gerelateerd aan de lesstof die niet zijn zoals ze zouden moeten zijn. De grootste is de public constructor van de singleton, maar ook niet alle types zijn gedefinieerd. Op sommige plekken word any gebruikt als een HTMLElement zonder typecheck of cast. Dit kan ervoor zorgen dat je een typeerror krijgt in code die probleemloos compileerd. 