export default () => "Example of dynamic imports from files";

(async() => {
    let data = await require("./data.js");
    console.log("data from dynamic import ", data);
})();
