// принцип разделения интерфейсов - Interface Segregation Principle
// - клиенты не должны вынужденно зависеть от методов, которыми не пользуются
var EmailMessage = /** @class */ (function () {
    function EmailMessage() {
    }
    EmailMessage.prototype.Send = function () {
        console.log("отправляем по Email сообщение", this.text);
    };
    return EmailMessage;
}());
// Теперь классы больше не содержат неиспользуемые методы.
// Чтобы избежать дублирование кода, применяется наследование интерфейсов.
// В итоге структра классов получается проще, чище и яснее. - сомневаюсь
