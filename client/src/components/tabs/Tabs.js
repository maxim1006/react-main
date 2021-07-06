import React, { Component, Children } from 'react';
import './Tabs.scss';

export class TabsComponent extends Component {
    state = {
        activeTab: 0,
    };

    componentDidMount() {
        const { activeTab } = this.props;

        if (activeTab !== undefined) {
            this.setState({ activeTab });
        }
    }

    render() {
        const { children } = this.props;

        if (children) {
            const tabsHeader = [];
            const tabsBody = [];

            // вспомогательная функция для работы с чайлдами
            Children.map(children, (child, index) => {
                tabsHeader.push(this.getTabsHeaderView(child, index));
                tabsBody.push(this.getTabsBody(child, index));
            });

            return (
                <div className="tabs">
                    <div className="tabs__header">{tabsHeader}</div>
                    <div className="tabs__content">{tabsBody}</div>
                </div>
            );
        }
    }

    getTabsHeaderView(child, index) {
        return (
            <div
                onClick={this.onClick.bind(this, index)}
                key={index}
                className={`tabs__header-item${index === this.state.activeTab ? ' _active' : ''}`}
            >
                {child.props.tabName}
            </div>
        );
    }

    getTabsBody(child, index) {
        if (index === this.state.activeTab) {
            return (
                <div className="tabs__content-item" key={index}>
                    {child.props.children}
                </div>
            );
        }
        return '';
    }

    onClick = index => {
        // Если вдруг захочу в процессе апдейта стейта использовать стейт или проперти, обязательно
        // через функцию это делаю
        this.setState((prevState, prevProps) => ({
            activeTab: index,
        }));
    };
}
