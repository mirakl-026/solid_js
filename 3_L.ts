// Принцип подстановки Лисков
// Liskov Substitution Principle

// Класс S может считаться подклассом T, если замена объектов T на объекты S не приведет к изменению работы программы.
// Должна быть возможность вместо базового типа подставить любой его подтип.

class Rectangle {
    public width: number;
    public height: number;

    public GetArea(): number {
        return this.width * this.height;
    }

    public SetWidth(value): void {
        this.width = value;
    }

    public GetWidth(): number {
        return this.width;
    }

    public SetHeight(value): void {
        this.height = value;
    }

    public GetHeight(): number {
        return this.height;
    }
}

class Square extends Rectangle {
    public SetWidth(value) {
        this.width = value;
        this.height = value;
    }

    public GetWidth(): number {
        return this.width;
    }

    public SetHeight(value) {
        this.width = value;
        this.height = value;
    }

    public GetHeight(): number {
        return this.height;
    }
}

function TestRectangleArea(rect: Rectangle) {
    rect.SetHeight(5);
    rect.SetWidth(10);
    if (rect.GetArea() != 50) {
        console.log("Некорректная площадь!", rect.GetArea());
    }
}

let shape1: Rectangle = new Square();
TestRectangleArea(shape1);  // не получается, значит принцип подстановки Лисков - нарушен!

// на самом деле сложно сходу реализовать, т.к. всё построенно на virtual и override - которых в TS (тем более JS) -
// нет, и автоматических свойствах, которые в TS работают хоть и так-же но требуют современной версии ECMA
// короче смысл в том, что перегружающий наследник не должнен усиливать проверки (иначе они отвалятся),
// не должен ослаблять уже существующие проверки, инварианты (условия базового класса) должны быть сохранены