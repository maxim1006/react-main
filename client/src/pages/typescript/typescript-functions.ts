// пример с VoidFunction
function foo() {}

let o: { foo: VoidFunction } = {
    foo,
};

// eslint-disable-next-line
export default o;
