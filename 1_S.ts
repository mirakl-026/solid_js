// Single Responsibility Principle - принцип единственной обязанности
// Суть этого принципа заключается в том, что класс должен выполнять одну единственную задачу

interface IPrinter {
    Print(text: string): void;
}

class ConsolePrinter implements IPrinter {
    Print(text: string): void {
        console.log(text);
    }
}

class Report {
    public text: string;

    public GoToFirstPage(): void {
        console.log("Переход к первой странице");
    }

    public GoToLastPage(): void {
        console.log("Переход к последней странице")
    }

    public GoToPage(pageNumber: number): void {
        console.log(`Переход к странице ${pageNumber}`);
    }

    public Print(printer: IPrinter): void {
        printer.Print(this.text);
    }
}

let printer: IPrinter = new ConsolePrinter();
let report: Report = new Report();
report.text = "Hello world";
report.Print(printer);

// Побочным положительным действием является то, что теперь функционал печати инкапсулируется в одном месте,
// и мы сможем использовать его повторно для объектов других классов, а не только Report.

