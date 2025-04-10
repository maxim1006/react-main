/**
 ************************ Singleton ***********************
 */
class Singleton {
    public static instance: Singleton;
    public prop: number = 0;

    constructor() {
        if (Singleton.instance) return Singleton.instance;

        this.prop = Math.random();

        Singleton.instance = this;
    }
}

const s1 = new Singleton();
const s2 = new Singleton();
const s3 = new Singleton();

console.log(s1.prop, s2.prop, s3.prop); // одно и тоже число 3 раза

// 2 способ
class Singleton2 {
    public static instance: Singleton2 = new Singleton2();

    prop = Math.random();
}

console.log(Singleton2.instance.prop, Singleton2.instance.prop, Singleton2.instance.prop); // одно и тоже число 3 раза

export {};
