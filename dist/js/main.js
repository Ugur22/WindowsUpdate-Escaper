var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Keys;
(function (Keys) {
    Keys[Keys["LEFT"] = 65] = "LEFT";
    Keys[Keys["RIGHT"] = 68] = "RIGHT";
    Keys[Keys["SHOOT"] = 32] = "SHOOT";
})(Keys || (Keys = {}));
var Util;
(function (Util) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.checkCollision = function (object1, object2) {
            return (object1.x < object2.x + object2.width &&
                object1.x + object1.width > object2.x &&
                object1.y < object2.y + object2.height &&
                object1.height + object1.y > object2.y);
        };
        Utils.removeFromArray = function (object, arrayObject) {
            for (var i = 0; i < arrayObject.length; i++) {
                if (arrayObject[i] === object) {
                    arrayObject.splice(i, 1);
                }
            }
        };
        Utils.removeObject = function (o, arrayObject) {
            this.removeFromArray(o, arrayObject);
        };
        return Utils;
    }());
    Util.Utils = Utils;
})(Util || (Util = {}));
var Game = (function () {
    function Game() {
        var _this = this;
        this.updates = new Array();
        this.gameObjects = new Array();
        this.health_text = document.getElementById("health");
        this.score = 0;
        this.counter = 0;
        this.bullets = new Array();
        this.container = document.getElementById("container");
        this.health = 3;
        this.dead = false;
        this.penguin = new Gameobjects.Penguin(this.container);
        var title = document.getElementById("title");
        title.innerHTML = "WindowsUpdate-Escaper";
        TweenLite.to(title, 2, { left: "250px", borderBottomColor: "#90e500", color: "white" });
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.createBullet = function () {
        this.bullets.push(new Gameobjects.Sudo(this.container, this.penguin.x, this.penguin.y));
    };
    Game.prototype.Reset = function () {
        this.penguin.removeMe();
    };
    Game.prototype.countWindowsUpdates = function () {
        return this.updates.filter(function (t) { return t instanceof Gameobjects.WindowsUpdate; }).length;
    };
    ;
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.counter++;
        if (this.counter > 60) {
            this.health_text.innerHTML = "Health:" + this.health;
            this.counter = 0;
            this.RandomX = Math.floor(Math.random() * 700) + 1;
            this.gameObjects.push(new Gameobjects.WindowsUpdate(this.container, this.RandomX, 0, this.penguin));
        }
        this.penguin.move();
        this.penguin.draw();
        for (var _i = 0, _a = this.bullets; _i < _a.length; _i++) {
            var b = _a[_i];
            b.move();
            b.draw();
            if (b.y < 0) {
                b.removeMe();
                Util.Utils.removeObject(b, this.bullets);
            }
        }
        for (var _b = 0, _c = this.gameObjects; _b < _c.length; _b++) {
            var g = _c[_b];
            if (g.y > 600) {
                g.removeMe();
                Util.Utils.removeObject(g, this.gameObjects);
            }
        }
        for (var _d = 0, _e = this.gameObjects; _d < _e.length; _d++) {
            var g = _e[_d];
            if (Util.Utils.checkCollision(this.penguin, g)) {
                console.log("hit");
                this.health--;
                g.removeMe();
                Util.Utils.removeObject(g, this.gameObjects);
            }
            if (this.health <= 0) {
                var gameOver = document.createElement("gameover");
                this.container.appendChild(gameOver);
                TweenLite.to(gameOver, 2, { y: 300, x: 200, ease: Bounce.easeOut });
                this.dead = true;
            }
            for (var _f = 0, _g = this.bullets; _f < _g.length; _f++) {
                var b = _g[_f];
                if (Util.Utils.checkCollision(b, g)) {
                    b.removeMe();
                    Util.Utils.removeObject(b, this.bullets);
                    g.removeMe();
                    Util.Utils.removeObject(g, this.updates);
                }
            }
            g.move();
            g.draw();
        }
        if (!this.dead)
            requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var GameObject = (function () {
    function GameObject() {
        this.observers = new Array();
        this.container = document.getElementById("container");
    }
    GameObject.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    GameObject.prototype.unsubscribe = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index);
    };
    GameObject.prototype.move = function () {
    };
    GameObject.prototype.draw = function () {
    };
    GameObject.prototype.removeMe = function () {
        this.div.remove();
    };
    Object.defineProperty(GameObject.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (v) {
            this._height = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (v) {
            this._width = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "div", {
        get: function () {
            return this._div;
        },
        set: function (v) {
            this._div = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (v) {
            this._x = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (v) {
            this._y = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (v) {
            this._speed = v;
        },
        enumerable: true,
        configurable: true
    });
    return GameObject;
}());
var Behaviours;
(function (Behaviours) {
    var Moving = (function () {
        function Moving(s) {
            this.speed = s;
        }
        Moving.prototype.onKeydown = function (e) {
        };
        Moving.prototype.onKeyUp = function (e) {
        };
        Moving.prototype.move = function (object, speed) {
            object.y = object.y + speed;
        };
        Moving.prototype.draw = function (object) {
            object.div.style.transform = "translate(" + object.x + "px, " + object.y + "px)";
        };
        return Moving;
    }());
    Behaviours.Moving = Moving;
})(Behaviours || (Behaviours = {}));
var Gameobjects;
(function (Gameobjects) {
    var Penguin = (function (_super) {
        __extends(Penguin, _super);
        function Penguin(parent) {
            var _this = _super.call(this) || this;
            _this.div = document.createElement("penguin");
            parent.appendChild(_this.div);
            _this.speed = 30;
            _this.x = _this.container.offsetWidth / 2 - 130;
            _this.y = 520;
            _this.height = 70;
            _this.width = 70;
            _this.behavior = new Behaviours.Moving(_this.speed);
            window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
            window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
            return _this;
        }
        Penguin.prototype.onKeyDown = function (e) {
            if (e.keyCode == Keys.LEFT) {
                this.x = this.x - this.speed;
                this.sendNotifications();
            }
            else if (e.keyCode == Keys.RIGHT) {
                this.x = this.x + this.speed;
                this.sendNotifications();
            }
            else if (e.keyCode == Keys.SHOOT) {
                Game.getInstance().createBullet();
            }
        };
        Penguin.prototype.onKeyUp = function (e) {
            if (this.onKeyUp) {
            }
        };
        Penguin.prototype.draw = function () {
            this.behavior.draw(this);
        };
        Penguin.prototype.sendNotifications = function () {
            for (var i = this.observers.length - 1; i > -1; i--) {
                this.observers[i].notify();
            }
        };
        Penguin.prototype.subscribe = function (o) {
            this.observers.push(o);
        };
        Penguin.prototype.unsubscribe = function (o) {
            var i = this.observers.indexOf(o);
            if (i != -1) {
                this.observers.splice(i, 1);
            }
        };
        return Penguin;
    }(GameObject));
    Gameobjects.Penguin = Penguin;
})(Gameobjects || (Gameobjects = {}));
var Gameobjects;
(function (Gameobjects) {
    var Sudo = (function (_super) {
        __extends(Sudo, _super);
        function Sudo(parent, x, y) {
            var _this = _super.call(this) || this;
            _this.div = document.createElement("sudo");
            parent.appendChild(_this.div);
            _this.speed = -5;
            _this.x = x;
            _this.y = y;
            _this.height = 30;
            _this.width = 30;
            _this.behavior = new Behaviours.Moving(_this.speed);
            return _this;
        }
        Sudo.prototype.move = function () {
            this.behavior.move(this, this._speed);
        };
        Sudo.prototype.draw = function () {
            this.behavior.draw(this);
        };
        return Sudo;
    }(GameObject));
    Gameobjects.Sudo = Sudo;
})(Gameobjects || (Gameobjects = {}));
var Gameobjects;
(function (Gameobjects) {
    var WindowsUpdate = (function (_super) {
        __extends(WindowsUpdate, _super);
        function WindowsUpdate(parent, x, y, s) {
            var _this = _super.call(this) || this;
            _this.observers = new Array();
            s.subscribe(_this);
            _this.div = document.createElement("update");
            parent.appendChild(_this.div);
            _this.speed = 1;
            _this.x = x;
            _this.y = -100;
            _this.height = 30;
            _this.width = 30;
            _this.behavior = new Behaviours.Moving(_this.speed);
            return _this;
        }
        WindowsUpdate.prototype.draw = function () {
            this.behavior.draw(this);
        };
        WindowsUpdate.prototype.move = function () {
            this.behavior.move(this, this.speed);
        };
        WindowsUpdate.prototype.notify = function () {
            this.speed = 5;
        };
        return WindowsUpdate;
    }(GameObject));
    Gameobjects.WindowsUpdate = WindowsUpdate;
})(Gameobjects || (Gameobjects = {}));
//# sourceMappingURL=main.js.map