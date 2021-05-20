```html
<div id="square"></div>
```

```css
* {
  margin: 0;
}

#square {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background-color: yellow;
}
```

```javascript
// simple example
function main() {
  const squareEl = document.querySelector("#square");

  let startOffsetX;
  let startOffsetY;

  let positionX = 0;
  let positionY = 0;

  let canDrag = false;

  const onMouseDown = (e) => {
    positionX = e.pageX;
    positionY = e.pageY;
    startOffsetX = squareEl.offsetLeft;
    startOffsetY = squareEl.offsetTop;
    canDrag = true;
  };

  const onMouseMove = (e) => {
    let diffX;
    let diffY;

    if (canDrag) {
      diffX = e.pageX - positionX + startOffsetX;
      diffY = e.pageY - positionY + startOffsetY;

      squareEl.style.left = diffX + "px";
      squareEl.style.top = diffY + "px";
    }
  };

  const onMouseUp = (e) => {
    canDrag = false;
  };

  squareEl.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

main();

```
