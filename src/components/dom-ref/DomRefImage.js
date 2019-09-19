import React, {Component} from 'react';
import './DomRefImage.scss';

export class DomRefImageComponent extends Component {
    constructor(props) {
        super(props);

        // так создаю референс на дом структуру
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.onload = () => {
            console.log(this.imageRef.current.clientHeight/100);
            this.imageRef.current.style.gridRowEnd = 'span ' + this.imageRef.current.clientHeight;
        }
    }

    render() {
        const {styleClass, image} = this.props;
        const className = `dom-ref-image ${styleClass || ''}`;

        return (
            <img
                ref={this.imageRef}
                alt={image}
                className={className}
                src={image}
            />
        );
    }
}
