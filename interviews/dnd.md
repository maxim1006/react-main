```javascript
let div = document.createElement("div");
div.id = "draggable";

document.body.insertAdjacentElement("afterbegin", div);

div.style.cssText = `position: absolute; top: 0; left: 0; width: 100px; height: 100px; background-color: green;z-index: 1000`;

let startX = 0;
let startY = 0;
let initXOffset;
let initYOffset;
let isDrag;

const onDragStart = (e) => {
    let divBCR = div.getBoundingClientRect();
    isDrag = true;
    startX = e.touches ? e.touches[0].pageX : e.pageX;
    startY = e.touches ? e.touches[0].pageY : e.pageY;
    initXOffset = divBCR.left;
    initYOffset = divBCR.top;
console.log(e.touches, startX, startY);
}

const onDragMove = (e) => {
    let curX = e.touches ? e.touches[0].pageX : e.pageX;
    let curY = e.touches ? e.touches[0].pageY : e.pageY;

    if (isDrag) {
        let x = curX - startX + initXOffset;
        let y = curY - startY + initYOffset;

        div.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
}

const onDragEnd = (e) => {
    isDrag = false;
}

div.addEventListener("mousedown", onDragStart);
div.addEventListener("touchstart", onDragStart);
document.addEventListener("mousemove", onDragMove)
document.addEventListener("touchmove", onDragMove)
document.addEventListener("mouseup", onDragEnd)
document.addEventListener("touchend", onDragEnd)
```
