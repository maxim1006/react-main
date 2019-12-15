import React, {Component} from 'react';
import './Tabs.scss'

export class TabsComponent extends Component {
    state = {
        activeTab: 0
    };

    render() {
        let tabsHeader;
        let tabsBody;

        if (this.props.children) {

            // get header
            tabsHeader = this.props.children.map((child, index) => {
                return (
                    <div
                        onClick={this.onClick.bind(this, index)}
                        key={index}
                        className={
                            "tabs__header-item" +
                            (index === this.state.activeTab ? ' _active' : '')
                        }
                    >
                        {child.props.tabName}
                    </div>
                );
            });

            // get body
            tabsBody = this.props.children.map((child, index) => {
                if (index === this.state.activeTab) {
                    return (
                        <div
                            className="tabs__content-item"
                            key={index}
                        >
                            {child.props.children}
                        </div>
                    );
                } else {
                    return "";
                }
            });

            return (
                <div className="tabs">
                    <div className="tabs__header">
                        {tabsHeader}
                    </div>
                    <div className="tabs__content">
                        {tabsBody}
                    </div>
                </div>
            );
        }
    }

    onClick = (index) => {
        // Если вдруг захочу в процессе апдейта стейта использовать стейт или проперти, обязательно
        // через функцию это делаю
        this.setState((prevState, prevProps) => ({
            activeTab: index
        }));
    }

}
