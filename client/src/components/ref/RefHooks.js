import React, { useCallback, useEffect, useRef } from "react";
import {
    StyledRef,
    StyledRefBlock,
    StyledRefLink,
    StyledRefTitle
} from "./StyledRef";

export default () => {
    const data = ["Title 1", "Title 2", "Title 3"];
    const containerRef = useRef();
    const refs = data.map(_ => useRef());
    let refsTopCoords = [];
    let containerTop;

    useEffect(() => {
        containerTop = containerRef.current.getBoundingClientRect().top;
        refsTopCoords = data.map(
            (i, index) => refs[index].current.getBoundingClientRect().top
        );
    }, []);

    const onLinkClick = useCallback(index => e => {
        e.preventDefault();

        const containerEl = containerRef.current;

        containerEl.scrollTo({
            top: refsTopCoords[index] - containerTop,
            left: 0
            // использую scroll-behavior: smooth (can be auto or smooth) в css
            // behavior: 'smooth'
        });
    });

    return (
        <>
            <StyledRefLink href="/" onClick={onLinkClick(0)}>
                title 1
            </StyledRefLink>
            <StyledRefLink href="/" onClick={onLinkClick(1)}>
                title 2
            </StyledRefLink>
            <StyledRefLink href="/" onClick={onLinkClick(2)}>
                title 3
            </StyledRefLink>
            <StyledRef ref={containerRef}>
                {data.map((title, index) => (
                    <StyledRefBlock key={title}>
                        <StyledRefTitle ref={refs[index]}>
                            {title}
                        </StyledRefTitle>
                    </StyledRefBlock>
                ))}
            </StyledRef>
        </>
    );
};
