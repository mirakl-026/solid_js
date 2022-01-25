// Single Responsibility Principle - принцип единственной обязанности
// Суть этого принципа заключается в том, что класс должен выполнять одну единственную задачу
var ConsolePrinter = /** @class */ (function () {
    function ConsolePrinter() {
    }
    ConsolePrinter.prototype.Print = function (text) {
        console.log(text);
    };
    return ConsolePrinter;
}());
var Report = /** @class */ (function () {
    function Report() {
    }
    Report.prototype.GoToFirstPage = function () {
        console.log("Переход к первой странице");
    };
    Report.prototype.GoToLastPage = function () {
        console.log("Переход к последней странице");
    };
    Report.prototype.GoToPage = function (pageNumber) {
        console.log("\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 ".concat(pageNumber));
    };
    Report.prototype.Print = function (printer) {
        printer.Print(this.text);
    };
    return Report;
}());
var printer = new ConsolePrinter();
var report = new Report();
report.text = "Hello world";
report.Print(printer);
// Побочным положительным действием является то, что теперь функционал печати инкапсулируется в одном месте,
// и мы сможем использовать его повторно для объектов других классов, а не только Report.
