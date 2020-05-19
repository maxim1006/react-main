import React, { useEffect, useState } from "react";
import "./MaterialLoader.scss";

export type MaterialLoaderProps = {
    customStyles?: { [key: string]: string };
    message?: string;
    delay?: number;
};

export default function MaterialLoaderComponent({
    customStyles,
    message,
    delay = 0
}: MaterialLoaderProps) {
    const [visible, setVisible] = useState(false);
    let timeoutId: number;

    useEffect(() => {
        if (delay) {
            timeoutId = setTimeout(() => {
                setVisible(true);
            }, delay);
        } else {
            setVisible(true);
        }

        return () => clearTimeout(timeoutId);
    }, [delay]);

    return (
        <>
            {visible ? (
                <div className="material-loader" style={customStyles}>
                    <svg className="material-loader__svg" viewBox="25 25 50 50">
                        <circle
                            className="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                    </svg>
                    <p className="material-loader__text">{message}</p>
                </div>
            ) : null}
        </>
    );
}

// Так задаю дефолтные проперти для компоненты (класса или функции)
MaterialLoaderComponent.defaultProps = {
    message: "Loading..."
};
