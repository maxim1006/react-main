import { useEffect } from "react";

export default (ref, cb) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            cb();
        }
    };

    // круто то что при каждом новом вызове этого useEffect будет вызываться возвращаемая функция очистки
    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};
