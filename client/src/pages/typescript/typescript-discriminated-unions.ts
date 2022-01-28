// если такой интерфейс то его стоит разбить на 2
// interface Shape {
//     kind: "circle" | "square";
//     radius?: number;
//     sideLength?: number;
// }

enum ShapeEnum {
    Square = 'Square',
    Circle = 'Circle'
}

interface Circle {
    kind: ShapeEnum.Circle;
    radius: number;
}

interface Square {
    kind: ShapeEnum.Square;
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    // это обычно в редьюсерах
    // switch (shape.kind) {
    //     case ShapeEnum.Circle: {
    //         return shape.radius;
    //     }
    //
    //     case ShapeEnum.Square: {
    //         return shape.sideLength;
    //     }
    //
    //     default:
    //         return shape;
    // }

    // или так
    return shape.kind === ShapeEnum.Circle ? shape.radius : shape.sideLength;
}

export default {};
