// принцип открытости/закрытости - open/closed principle
// сущности программы должны быть открыты для расширения, но закрыты для изменения
// приготовление пюре
var PotatoMeal = /** @class */ (function () {
    function PotatoMeal() {
    }
    PotatoMeal.prototype.Make = function () {
        console.log("Чистим картошку");
        console.log("Ставим почищенную картошку на огонь");
        console.log("Сливаем остатки воды, разминаем варённый картофель в пюре");
        console.log("Посыпаем пюре специями и зеленью");
        console.log("Картофельное пюре готово");
    };
    return PotatoMeal;
}());
// приготовление салата
var SaladMeal = /** @class */ (function () {
    function SaladMeal() {
    }
    SaladMeal.prototype.Make = function () {
        console.log("Нарезаем помидоры и огурцы");
        console.log("Посыпаем зеленью, солью и специями");
        console.log("Поливаем подсолнечным маслом");
        console.log("Салат готов");
    };
    return SaladMeal;
}());
// повар
var Cook = /** @class */ (function () {
    function Cook(name) {
        this.name = name;
    }
    Cook.prototype.MakeDinner = function (meal) {
        meal.Make();
    };
    return Cook;
}());
var bob = new Cook("Bob");
bob.MakeDinner(new PotatoMeal());
console.log(" ");
bob.MakeDinner(new SaladMeal());
