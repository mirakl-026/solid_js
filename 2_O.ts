// принцип открытости/закрытости - open/closed principle
// сущности программы должны быть открыты для расширения, но закрыты для изменения

// абстрактное приготовление еды:
interface IMeal {
    Make(): void;
}

// приготовление пюре
class PotatoMeal implements IMeal {
    public Make() {
        console.log("Чистим картошку");
        console.log("Ставим почищенную картошку на огонь");
        console.log("Сливаем остатки воды, разминаем варённый картофель в пюре");
        console.log("Посыпаем пюре специями и зеленью");
        console.log("Картофельное пюре готово");
    }
}

// приготовление салата
class SaladMeal implements IMeal {
    public Make() {
        console.log("Нарезаем помидоры и огурцы");
        console.log("Посыпаем зеленью, солью и специями");
        console.log("Поливаем подсолнечным маслом");
        console.log("Салат готов");
    }
}

// повар
class Cook {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public MakeDinner(meal: IMeal) : void {
        meal.Make();
    }
}

let bob : Cook = new Cook("Bob");
bob.MakeDinner(new PotatoMeal());
console.log(" ");
bob.MakeDinner(new SaladMeal());

// Теперь класс Cook закрыт от изменений,
// зато мы можем легко расширить его функциональность, определив дополнительные реализации интерфейса IMeal.