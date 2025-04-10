/*eslint-disable*/
/**
 ************************ Aggregation (DI) ***********************
 */
class Engine {
    drive() {
        console.log('CEngine drive');
    }
}

class Wheel {
    drive() {
        console.log('CWheel drive');
    }
}

class Freshener {}

class AggregationCar {
    engine: Engine;
    wheels: Wheel[];

    // Аггрегация (когда экземпляр двигателя создается где-то в другом месте кода, и передается в конструктор автомобиля в качестве параметра) - пердача через DI как инстанс
    // Агрегация — это "имеет, но не контролирует". Машина имеет двигатель и колеса, но те могут существовать и вне машины. Это и есть аггрегация.
    // Агрегация — это слабое отношение, где объект содержит другие объекты, но они могут существовать независимо. (а композиция - сильное)
    constructor(
        public freshener: Freshener,
        engine: Engine,
        wheels: Wheel[],
    ) {
        // это для примера, что можно и так и через public freshener: CFreshener сделать аггрегацию
        this.freshener = freshener;
        this.engine = engine;
        this.wheels = wheels;
    }

    // делегирование - вызываю методы и двигателя и колес
    // Делегирование в ООП — это техника, при которой один объект делегирует выполнение некоторых задач другому объекту, который является его частью или зависимостью.
    drive() {
        this.engine.drive();
        this.wheels.forEach(i => i.drive());
    }
}

const aggregationCar = new AggregationCar(new Freshener(), new Engine(), [
    new Wheel(),
    new Wheel(),
    new Wheel(),
    new Wheel(),
]);
