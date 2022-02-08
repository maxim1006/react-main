import { memo, useCallback, useEffect, useRef } from 'react';
import './drag-n-drop.component.scss';

const DragNDrop = () => {
    const dragRef = useRef<HTMLDivElement>(null!);
    const dragParentRef = useRef<HTMLDivElement>(null!);
    let isDraggerDragged = useRef<boolean>();
    let startX = useRef<number>();
    let startY = useRef<number>();
    let startOffsetX = useRef<number>();
    let startOffsetY = useRef<number>();
    let startDragElementBCR = useRef<{
        left: number;
        top: number;
        width: number;
        height: number;
    }>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let documentElementInfo = useRef<{ width: number; height: number }>();

    const onDragStart = useCallback((e: any) => {
        e.preventDefault();
        isDraggerDragged.current = true;

        if (e.touches) {
            startX.current = e.touches[0].pageX;
            startY.current = e.touches[0].pageY;
        } else {
            startX.current = e.pageX;
            startY.current = e.pageY;
        }

        const dragElement = dragRef.current;
        const dragParentElement = dragParentRef.current;
        startDragElementBCR.current = dragElement.getBoundingClientRect();
        const dragParentElementBCR = dragParentElement.getBoundingClientRect();
        startOffsetX.current = startDragElementBCR.current.left - dragParentElementBCR.left;
        startOffsetY.current = startDragElementBCR.current.top - dragParentElementBCR.top;

        const { clientHeight: height, clientWidth: width } = document.documentElement;

        documentElementInfo.current = { width, height };

        console.log(documentElementInfo.current);
    }, []);

    const onDrag = useCallback((e: any) => {
        if (isDraggerDragged.current) {
            let diffX;
            let diffY;

            if (e.touches) {
                diffX = e.touches[0].pageX - startX.current;
                diffY = e.touches[0].pageY - startY.current;
            } else {
                diffX = e.pageX - startX.current;
                diffY = e.pageY - startY.current;
            }

            let resultX;
            let resultY;

            resultX = diffX + startOffsetX.current;
            resultY = diffY + startOffsetY.current;

            // top border
            if (diffY + startDragElementBCR.current.top < 0) {
                resultY = startOffsetY.current - startDragElementBCR.current.top;
            }

            // left border
            if (diffX + startDragElementBCR.current.left < 0) {
                resultX = startOffsetX.current - startDragElementBCR.current.left;
            }

            // TODO bottom border
            // TODO top border

            // limit dragged element by document view
            // console.log("e.pageY ", e.pageY);
            // console.log("diffY ", diffY);
            // console.log("startOffsetY ", startOffsetY);
            // console.log("resultY ", resultY);
            // console.log(startDragElementBCR);
            // console.log("documentElementInfo ", documentElementInfo);

            // console.log(dragElementBCR.top > 0);
            // console.log(dragElementBCR.left > 0);
            // console.log(dragElementBCR.right - clientWidth < 0);
            // console.log(dragElementBCR.bottom - clientHeight < 0);

            dragRef.current.style.transform = `translate3d(${resultX}px, ${resultY}px, 0)`;
        }
    }, []);

    const onDragEnd = useCallback(() => {
        isDraggerDragged.current = false;
    }, []);

    useEffect(() => {
        const dragElement = dragRef.current;
        // console.log("drag useEffect");

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
        };
    }, [onDragStart, onDrag, onDragEnd]);

    return (
        <div className='drag-n-drop' ref={dragParentRef}>
            <div className='drag-n-drop__element' ref={dragRef}>
                Drag me
            </div>
        </div>
    );
};

export default memo(DragNDrop);
