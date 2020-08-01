const worker = self => {
    function generateBigArray() {
        const arr = [];
        arr.length = 100000000;
        for (let i = 0; i < arr.length; i++) arr[i] = i;
        return arr;
    }

    function sum(arr) {
        return arr.reduce((e, prev) => e + prev, 0);
    }

    function factorial(num) {
        if (num === 1) return 1;
        return num * factorial(num - 1);
    }

    self.addEventListener("message", event => {
        const { eventType, payload } = event.data;

        if (eventType === "sum") {
            const start = performance.now();
            const arr = generateBigArray();
            console.log("webworker took", performance.now() - start, " ms");
            postMessage({
                eventType: "sumResult",
                payload: sum(arr)
            });
        }
    });
};
export default worker;
