import React, {memo, useCallback, useState} from "react";

const Child = memo(({prop, onClick}) => {
    console.log("Child rerender");
    return <div onClick={onClick}>Child counter: {prop}</div>
});

const Child1 = memo(({prop, onClick}) => {
    console.log("Child 1 rerender");
    return <div onClick={onClick}>Child counter: {prop}</div>
});


export default memo(() => {
    let [clickCounter, setClickCounter] = useState(0);
    let [clickCounter1, setClickCounter1] = useState(0);

    // Без мемо на чайлдах оба бы перерендеривались при каждом клике, с мемо перерендеривается только тот у которого
    // меняется входные пропсы. Также если у чайлдов есть коллбек обязательно оборачиваю его в useCallback чтобы не
    // менялась ссылка на входной проп - функцию
    const onChildClick = () => setClickCounter(++clickCounter);
    const onChildClick1 = () => setClickCounter1(++clickCounter1);

    return (
        <>
            <div onClick={onChildClick}><Child prop={clickCounter}/></div>
            <div onClick={onChildClick1}><Child1 prop={clickCounter1}/></div>
        </>
    )
});
