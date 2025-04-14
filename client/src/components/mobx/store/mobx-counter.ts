import { makeAutoObservable } from 'mobx';

class MobxCounter {
    count = 0;
    timer = 60;
    random = 0;

    constructor() {
        // автоматически настраивает наш класс
        makeAutoObservable(this);
    }

    increment() {
        // состояние изменияемое
        this.count = this.count + 1;
    }

    decrement() {
        // стейт мутабельный
        this.count = this.count - 1;
    }

    randomize() {
        this.random = Math.random();
    }

    // будет вызываться только тогда когда изменится либо count либо timer
    get total() {
        console.log('Get total');
        return `Count + timer = ${this.count + this.timer} `;
    }
}

const mobxCounter = new MobxCounter();

export default mobxCounter;
