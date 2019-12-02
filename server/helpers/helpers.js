export const generateUniqueId = () => {
    return  getRandomSymbols4() +  getRandomSymbols4() + "-" +  getRandomSymbols4();
};



// Helpers
function getRandomSymbols4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
