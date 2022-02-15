import { Component, createRef } from 'react';
import './DomRefImage.scss';

export class DomRefImageComponent extends Component {
    constructor(props) {
        super(props);

        // так создаю референс на дом структуру
        this.imageRef = createRef();
    }

    componentDidMount() {
        this.imageRef.current.onload = () => {
            this.imageRef.current.style.gridRowEnd = `span ${this.imageRef.current.clientHeight}`;
        };
    }

    render() {
        const { styleClass, image } = this.props;
        const className = `dom-ref-image ${styleClass || ''}`;

        return <img loading='lazy' ref={this.imageRef} alt={image} className={className} src={image} />;
    }
}
