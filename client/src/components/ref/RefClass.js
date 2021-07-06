import React, { PureComponent } from 'react';
import { StyledRef, StyledRefBlock, StyledRefLink, StyledRefTitle } from './StyledRef';

export default class RefClass extends PureComponent {
    refContainers = [];

    state = {
        data: ['Title 1', 'Title 2', 'Title 3'],
    };

    constructor(props) {
        super(props);

        const { data } = this.state;

        // либо использую через React.createRef();
        this.containerRef = React.createRef();

        // либо через функцию (см в render) <div ref={el => this.functionalRefDiv = el}>Functional ref</div>
        this.functionalRefDiv = null;

        this.refContainers = data.map(_ => React.createRef());
    }

    componentDidMount() {
        const { data } = this.state;

        this.containerTop = this.containerRef.current.getBoundingClientRect().top;
        this.refsTopCoords = data.map((i, index) => this.refContainers[index].current.getBoundingClientRect().top);
    }

    render() {
        const { data } = this.state;

        return (
            <>
                <StyledRefLink href="/" onClick={this.onLinkClick(0)}>
                    title 1
                </StyledRefLink>
                <StyledRefLink href="/" onClick={this.onLinkClick(1)}>
                    title 2
                </StyledRefLink>
                <StyledRefLink href="/" onClick={this.onLinkClick(2)}>
                    title 3
                </StyledRefLink>
                <StyledRef ref={this.containerRef}>
                    {data.map((title, index) => (
                        <StyledRefBlock key={title}>
                            <StyledRefTitle ref={this.refContainers[index]}>{title}</StyledRefTitle>
                        </StyledRefBlock>
                    ))}
                </StyledRef>
                <div ref={el => (this.functionalRefDiv = el)}>Functional ref</div>
            </>
        );
    }

    onLinkClick = index => e => {
        e.preventDefault();

        const containerEl = this.containerRef.current;

        containerEl.scrollTo({
            top: this.refsTopCoords[index] - this.containerTop,
            left: 0,
            // использую scroll-behavior: smooth (can be auto or smooth) в css
            // behavior: 'smooth'
        });
    };
}
