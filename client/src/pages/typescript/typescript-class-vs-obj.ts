interface ObjModel {
    p: string;
    f: FuncModel;
    f1: FuncModel1;
    f2: FuncModel2;
}

interface FuncModel {
    (): number[];
}

interface FuncModel1 {
    (): string;
}

interface FuncModel2 {
    (): number;
}

// 3 варианта записи в объекте
export const obj: ObjModel = {
    p: '1',

    f() {
        return [1];
    },

    f1: function () {
        return '1';
    },

    f2: () => 1,
};

// сравним с записью класса
class C implements ObjModel {
    static x = 0;

    static printX() {
        console.log(C.x);
    }

    p = '1';

    f() {
        return [1];
    }

    f1() {
        return '1';
    }

    f2 = () => 1;
}
// превратиться в
// class C {
//     constructor() {
//         this.p = '1';
//         this.f2 = () => 1;
//     }
//     static printX() {
//         console.log(C.x);
//     }
//     f() {
//         return [1];
//     }
//     f1() {
//         return '1';
//     }
// }
// C.x = 0;

/**/
// Static members can also use the same public, protected, and private visibility modifiers:
class MyClass {
    private static x = 0;
}
// console.log(MyClass.x); // error
