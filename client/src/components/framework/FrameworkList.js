import { Component } from 'react';
import { connect } from 'react-redux';
import Framework from './Framework';
import * as fromActions from '../../store/actions';

class FrameworkList extends Component {
    componentDidMount() {
        this.props.fetchFrameworks();
    }

    getFrameworkList() {
        const { frameworks, changeFrameworkStatus } = this.props;

        return frameworks.map((framework, index) => {
            return (
                <li key={index}>
                    <Framework onChange={changeFrameworkStatus.bind(this, framework)} {...framework} />
                </li>
            );
        });
    }

    render() {
        return <ul>{this.getFrameworkList()}</ul>;
    }
}

const mapStateToProps = (state, ownProps) => ({
    frameworks: state.frameworks,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    // обращаю внимание что тут fetchFrameworks а не fetchFrameworks(), тем самым могу в action не писать
    // доп функцию обертку
    fetchFrameworks: () => dispatch(fromActions.fetchFrameworks),
    changeFrameworkStatus: framework => {
        switch (framework.progress) {
            case 'done': {
                framework.progress = null;
                break;
            }
            case 'indeterminate': {
                framework.progress = 'done';
                break;
            }
            default: {
                framework.progress = 'indeterminate';
                break;
            }
        }

        dispatch(fromActions.changeFrameworkStatus(framework));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FrameworkList);
