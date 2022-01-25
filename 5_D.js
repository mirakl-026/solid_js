// Принцип инверсии зависимостей (Dependency Inversion Principle)
var ConsolePrinter = /** @class */ (function () {
    function ConsolePrinter() {
    }
    ConsolePrinter.prototype.Print = function (text) {
        console.log("консоль: ", text);
    };
    return ConsolePrinter;
}());
var HtmlPrinter = /** @class */ (function () {
    function HtmlPrinter() {
    }
    HtmlPrinter.prototype.Print = function (text) {
        console.log("HTML: ", text);
    };
    return HtmlPrinter;
}());
var Book = /** @class */ (function () {
    function Book(printer) {
        this.printer = printer;
    }
    Book.prototype.ShowText = function () {
        this.printer.Print(this.text);
    };
    return Book;
}());
var book = new Book(new ConsolePrinter());
book.text = "Восхождение героя щита!";
book.ShowText();
book.printer = new HtmlPrinter();
book.ShowText();
