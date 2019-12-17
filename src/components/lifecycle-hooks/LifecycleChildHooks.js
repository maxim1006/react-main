import {useEffect} from "react";

export default ({prop}) => {
    // будет выполняться каждый раз при изменении стейта родителя
    console.log("LifecycleChildHooks rendered");

    // выполнится лишь при изменении prop
    useEffect(() => {
        console.log("LifecycleChildHooks useEffect rendered");
    }, [prop]);

    return "LifecycleChildHooks";
}
