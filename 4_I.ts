// принцип разделения интерфейсов - Interface Segregation Principle
// - клиенты не должны вынужденно зависеть от методов, которыми не пользуются

// // плохой пример:
// interface IMessage {
//     Send(): void;
//     text: string;
//     subject: string;
//     toAddress: string;
//     fromAddress: string;
// }
//
// class EmailMessage implements IMessage {
//     fromAddress: string;
//     subject: string;
//     text: string;
//     toAddress: string;
//
//     Send(): void {
//         console.log("отправляем по Email сообщение", this.text);
//     }
// }
//
// class SmsMessage implements IMessage {
//     fromAddress: string;
//     subject: string;        // в СМС нет "кому", поэтому по хорошему нужно Get, Set и в SmsMessage сделать throw и там и там
//     text: string;
//     toAddress: string;
//
//     Send(): void {
//         console.log("отправляем по Sms сообщение", this.text);
//     }
// }
//
// // так-же проблема заключается в расширении - добавив к примеру ещё поле в интерфейс - во всех наследниках придётся разбираться с реализацией

// правильный пример
interface IMessage {
    Send(): void;
    toAddress: string;
    fromAddress: string;
}

interface IVoiceMessage extends IMessage {
    voice: string;
}

interface ITextMessage extends IMessage {
    text: string;
}

interface IEmailMessage extends ITextMessage {
    subject: string;
}

class EmailMessage implements IEmailMessage {
    fromAddress: string;
    text: string;
    subject: string;
    toAddress: string;

    Send(): void {
        console.log("отправляем по Email сообщение", this.text);
    }
}

// Теперь классы больше не содержат неиспользуемые методы.
// Чтобы избежать дублирование кода, применяется наследование интерфейсов.
// В итоге структра классов получается проще, чище и яснее. - сомневаюсь
