import React, {Component} from 'react';


// это запись глупой компоненты которая не имеет стейта, а если нужен стейт то см. ниже
/*export function ArticleComponent(props) {
    console.log(props);

    return (
        <div
           onClick={props.onClick.bind(this, props)}
        >{props.title}</div>
    )
}*/

export class Article extends Component {
    // это расширенный синтаксис
    /*constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }*/

    // это новый синтаксис, эквивалент конструктор с пропсами + стейт
    state = {
        isOpen: true
    };

    handleClick = () => {
        this.props.onClick.call(this, this.props);
        this.toggleArticle();
    };

    toggleArticle() {
        this.setState((state, props) => ({
            isOpen: !this.state.isOpen
        }));
    }

    render() {
        const title = this.props.title;
        const content = this.state.isOpen ? <div className="content">{this.props.content || 'content'}</div> : '';
        const openState = this.state.isOpen ? 'opened' : 'closed';

        return (
            <div className="article">
                <div
                    onClick={this.handleClick}
                >{title} {openState}</div>

                {content}
                {this.props.children}
            </div>
        )
    }
}
