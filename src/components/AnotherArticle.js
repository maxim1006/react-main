import React, {Component} from 'react';

export class AnotherArticle extends Component {
    state = {
        isChildrenContentVisible: true
    };

    onTitleClick = () => {
        this.setState((state, props) => ({
            isChildrenContentVisible: !state.isChildrenContentVisible
        }));
    };

    onRemove = () => {
        this.props.onRemove.call(this, this.props);
    };

    render() {
        const childrenContent = this.state.isChildrenContentVisible ?
            <div className="another-component__content">
                {this.props.children}
                {this.props.article.content}
            </div> : null;

        const openState = this.state.isChildrenContentVisible ? 'opened' : 'closed';

        return (
            <div className="another-component">
                <div className="another-component__title"
                     onClick={this.onTitleClick}
                >
                    {this.props.article.title}
                    {openState}
                    <span onClick={this.onRemove}>X</span>
                </div>
                {childrenContent}
            </div>
        );
    }

}
