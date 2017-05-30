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
var GameObject = (function () {
    function GameObject() {
        this.container = document.getElementById("container");
    }
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
        _this.behavior = new Moving(_this.speed);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        return _this;
    }
    Penguin.prototype.onKeyDown = function (e) {
        if (e.keyCode == 65) {
            this.x = this.x - this.speed;
        }
        else if (e.keyCode == 68) {
            this.x = this.x + this.speed;
        }
        else if (e.keyCode == 32) {
            var b = new Sudo(this.container, this.x, this.y);
            Game.getInstance().createBullet(b);
        }
    };
    Penguin.prototype.onKeyUp = function (e) {
        if (this.onKeyUp) {
        }
    };
    Penguin.prototype.draw = function () {
        this.behavior.draw(this);
    };
    return Penguin;
}(GameObject));
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
        _this.behavior = new Moving(_this.speed);
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
var WindowsUpdate = (function (_super) {
    __extends(WindowsUpdate, _super);
    function WindowsUpdate(parent, x, y) {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("update");
        parent.appendChild(_this.div);
        _this.speed = 1;
        _this.x = x;
        _this.y = y;
        _this.height = 30;
        _this.width = 30;
        _this.behavior = new Moving(_this.speed);
        return _this;
    }
    WindowsUpdate.prototype.draw = function () {
        this.behavior.draw(this);
    };
    WindowsUpdate.prototype.move = function () {
        this.behavior.move(this, this.speed);
    };
    return WindowsUpdate;
}(GameObject));
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
var Game = (function () {
    function Game() {
        var _this = this;
        this.updates = new Array();
        this.bullets = new Array();
        this.container = document.getElementById("container");
        this.penguin = new Penguin(this.container);
        setInterval(function () {
            if (_this.countWindowsUpdates() > 50)
                return;
            _this.RandomX = Math.floor(Math.random() * 700) + 1;
            _this.updates.push(new WindowsUpdate(_this.container, _this.RandomX, 0));
        }, 500);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.createBullet = function (b) {
        this.bullets.push(b);
    };
    Game.prototype.Reset = function () {
        this.penguin.removeMe();
    };
    Game.prototype.countWindowsUpdates = function () {
        return this.updates.filter(function (t) { return t instanceof WindowsUpdate; }).length;
    };
    ;
    Game.prototype.gameLoop = function () {
        var _this = this;
        if (this.penguin != null) {
            this.penguin.draw();
        }
        for (var _i = 0, _a = this.bullets; _i < _a.length; _i++) {
            var b = _a[_i];
            b.move();
            b.draw();
            for (var _b = 0, _c = this.updates; _b < _c.length; _b++) {
                var u = _c[_b];
                if (Utils.checkCollision(b, u)) {
                    b.removeMe();
                    Utils.removeObject(b, this.bullets);
                    u.removeMe();
                    Utils.removeObject(u, this.updates);
                }
                if (b.y < 0) {
                    b.removeMe();
                    Utils.removeObject(b, this.bullets);
                }
            }
        }
        for (var _d = 0, _e = this.updates; _d < _e.length; _d++) {
            var u = _e[_d];
            if (Utils.checkCollision(u, this.penguin)) {
                console.log("hit");
                this.Reset();
            }
            u.draw();
            u.move();
            if (u.y > 600) {
                u.removeMe();
                Utils.removeObject(u, this.updates);
            }
        }
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
    var g = Game.getInstance();
});
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
//# sourceMappingURL=main.js.map