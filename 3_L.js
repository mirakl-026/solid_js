// Принцип подстановки Лисков
// Liskov Substitution Principle
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Класс S может считаться подклассом T, если замена объектов T на объекты S не приведет к изменению работы программы.
// Должна быть возможность вместо базового типа подставить любой его подтип.
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.GetArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.SetWidth = function (value) {
        this.width = value;
    };
    Rectangle.prototype.GetWidth = function () {
        return this.width;
    };
    Rectangle.prototype.SetHeight = function (value) {
        this.height = value;
    };
    Rectangle.prototype.GetHeight = function () {
        return this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.SetWidth = function (value) {
        this.width = value;
        this.height = value;
    };
    Square.prototype.GetWidth = function () {
        return this.width;
    };
    Square.prototype.SetHeight = function (value) {
        this.width = value;
        this.height = value;
    };
    Square.prototype.GetHeight = function () {
        return this.height;
    };
    return Square;
}(Rectangle));
function TestRectangleArea(rect) {
    rect.SetHeight(5);
    rect.SetWidth(10);
    if (rect.GetArea() != 50) {
        console.log("Некорректная площадь!", rect.GetArea());
    }
}
var shape1 = new Square();
TestRectangleArea(shape1);
