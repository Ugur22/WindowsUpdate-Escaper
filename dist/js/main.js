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
    }
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
        var container = document.getElementById("container");
        parent.appendChild(_this.div);
        _this.speed = 0;
        _this.x = container.offsetWidth / 2 - 130;
        _this.y = 520;
        _this.behavior = new Moving(_this.speed, _this);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        return _this;
    }
    Penguin.prototype.onKeyDown = function (e) {
        this.behavior.onKeydown(e, this);
    };
    Penguin.prototype.draw = function () {
        this.behavior.draw(this);
    };
    return Penguin;
}(GameObject));
var Sudo = (function (_super) {
    __extends(Sudo, _super);
    function Sudo(parent) {
        var _this = _super.call(this) || this;
        _this.div = document.createElement("sudo");
        parent.appendChild(_this.div);
        _this.speed = 0;
        _this.x = 90;
        _this.y = 50;
        _this.behavior = new Moving(_this.speed, _this);
        return _this;
    }
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
        _this.behavior = new Moving(_this.speed, _this);
        return _this;
    }
    WindowsUpdate.prototype.draw = function () {
        this.behavior.draw(this);
    };
    WindowsUpdate.prototype.move = function () {
        this.behavior.move(this);
    };
    return WindowsUpdate;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.updates = new Array();
        var container = document.getElementById("container");
        this.penguin = new Penguin(container);
        this.sudo = new Sudo(container);
        for (var i = 1; i <= 5; i++) {
            this.updates.push(new WindowsUpdate(container, i * 100, 0));
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.penguin.draw();
        this.sudo.draw();
        for (var _i = 0, _a = this.updates; _i < _a.length; _i++) {
            var u = _a[_i];
            u.draw();
            u.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Moving = (function () {
    function Moving(s, object) {
        this.speed = s;
    }
    Moving.prototype.onKeydown = function (e, object) {
        if (e.keyCode == 65) {
            object.x = object.x - 30;
        }
        else if (e.keyCode == 68) {
            object.x = object.x + 30;
        }
    };
    Moving.prototype.move = function (object) {
        object.y = object.y + 1;
        if (object.y > 600) {
            object.y = 0;
        }
    };
    Moving.prototype.draw = function (object) {
        object.div.style.transform = "translate(" + object.x + "px, " + object.y + "px)";
    };
    return Moving;
}());
//# sourceMappingURL=main.js.map