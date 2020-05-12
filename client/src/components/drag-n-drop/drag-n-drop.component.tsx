import React, {memo, useEffect, useRef} from "react";
import "./drag-n-drop.component.scss";

const DragNDrop = () => {
    const dragRef = useRef<HTMLDivElement>(null!);
    const dragParentRef = useRef<HTMLDivElement>(null!);
    let isDraggerDragged: boolean,
        startX: number,
        startY: number,
        startOffsetX: number,
        startOffsetY: number,
        startDragElementBCR: {left: number, top: number, width: number; height: number },
        documentElementInfo: {width: number, height: number};

    const onDragStart = (e: any) => {
        e.preventDefault();
        isDraggerDragged = true;

        if (e.touches) {
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
        } else {
            startX = e.pageX;
            startY = e.pageY;
        }

        const dragElement = dragRef.current;
        const dragParentElement = dragParentRef.current;
        startDragElementBCR = dragElement.getBoundingClientRect();
        const dragParentElementBCR = dragParentElement.getBoundingClientRect();
        startOffsetX = startDragElementBCR.left - dragParentElementBCR.left;
        startOffsetY = startDragElementBCR.top - dragParentElementBCR.top;

        const {clientHeight: height, clientWidth: width} = document.documentElement;
        documentElementInfo = {width, height}
    }

    const onDrag = (e: any) => {
        if (isDraggerDragged) {
            let diffX, diffY;

            if (e.touches) {
                diffX = e.touches[0].pageX - startX;
                diffY = e.touches[0].pageY - startY;
            } else {
                diffX = e.pageX - startX;
                diffY = e.pageY - startY;
            }

            let resultX, resultY;

            resultX = diffX + startOffsetX;
            resultY = diffY + startOffsetY;

            // top border
            if (diffY + startDragElementBCR.top < 0) {
                resultY = startOffsetY - startDragElementBCR.top;
            }

            // left border
            if (diffX + startDragElementBCR.left < 0) {
                resultX = startOffsetX - startDragElementBCR.left;
            }

            // TODO bottom border
            // TODO top border


            // limit dragged element by document view
            console.log("e.pageY ",  e.pageY);
            console.log("diffY ",  diffY);
            console.log("startOffsetY ",  startOffsetY);
            console.log("resultY ",  resultY);
            console.log(startDragElementBCR);
            console.log("documentElementInfo ", documentElementInfo);

            // console.log(dragElementBCR.top > 0);
            // console.log(dragElementBCR.left > 0);
            // console.log(dragElementBCR.right - clientWidth < 0);
            // console.log(dragElementBCR.bottom - clientHeight < 0);

            dragRef.current.style.transform = `translate3d(${resultX + "px"}, ${resultY + "px"}, 0)`;
        }
    }

    const onDragEnd = () => {
        isDraggerDragged = false;
    }

    useEffect(() => {
        const dragElement = dragRef.current;

        dragElement.addEventListener('mousedown', onDragStart);
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', onDragEnd);

        dragElement.addEventListener('touchstart', onDragStart);
        dragElement.addEventListener('touchmove', onDrag);
        dragElement.addEventListener('touchend', onDragEnd);

        return () => {
            dragElement.removeEventListener('mousedown', onDragStart);
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('mouseup', onDragEnd);

            dragElement.removeEventListener('touchstart', onDragStart);
            dragElement.removeEventListener('touchmove', onDrag);
            dragElement.removeEventListener('touchend', onDragEnd);
        }
    }, []);

    return (
        <div className="drag-n-drop" ref={dragParentRef}>
            <div className="drag-n-drop__element" ref={dragRef}>
                Drag me
            </div>
        </div>
    );
};

export default memo(DragNDrop);