function main() {
    const errorImgNumber = document.querySelectorAll("img[alt='']");
    const errorImgNumberLength = errorImgNumber.length;

    crome.runtime.sendMessage({
        key: 'errorImgNumber',
        payload: errorImgNumberLength,
    });
}

main();
