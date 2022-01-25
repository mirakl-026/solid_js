// Принцип инверсии зависимостей (Dependency Inversion Principle)

// Модули верхнего уровня не должны зависеть от модулей нижнего уровня.
// И те и другие должны зависеть от абстракций.

// Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

// Плохой пример
// class Book {
//     public text: string;
//     public printer: ConsolePrinter;
//
//     public ShowText(): void {
//         this.printer.Print(this.text);
//     }
// }
//
// class ConsolePrinter {
//     public Print(text: string): void {
//         console.log(text)
//     }
// }

/*
    Класс Book, представляющий книгу, использует для печати класс ConsolePrinter.
    При подобном определении класс Book зависит от класса ConsolePrinter.
    Более того мы жестко определили, что печать книгу можно только на консоли с помощью класса ConsolePrinter. Другие же варианты, например, вывод на принтер, вывод в файл или с использованием каких-то элементов графического интерфейса - все это в данном случае исключено. Абстракция печати книги не отделена от деталей класса ConsolePrinter.
    Все это является нарушением принципа инверсии зависимостей.
 */

// правильный пример:
interface IPrinter {
    Print(text: string): void;
}

class ConsolePrinter implements IPrinter {
    Print(text: string) {
        console.log("консоль: ", text);
    }
}

class HtmlPrinter implements IPrinter {
    Print(text: string) {
        console.log("HTML: ", text)
    }
}

class Book {
    public text: string;
    public printer: IPrinter;

    constructor(printer: IPrinter) {
        this.printer = printer;
    }

    public ShowText() : void {
        this.printer.Print(this.text);
    }
}

let book = new Book(new ConsolePrinter());
book.text = "Восхождение героя щита!";
book.ShowText();
book.printer = new HtmlPrinter();
book.ShowText();