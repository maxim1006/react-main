export default () => "Example of dynamic importts from files";

(async() => {
    let data = await require("./data.js");
    console.log("data from dynamic import ", data);
})();
