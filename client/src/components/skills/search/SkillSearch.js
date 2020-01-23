import React, {memo} from "react";
import {connect} from "react-redux";
import {changeSkillSearchValue} from "../../../store/actions";

const SkillSearch = memo(({...restProps}) => (
    <div className="skill-search">
        <input type="text" {...restProps}/>
        <button type="button">Add skill</button>
    </div>
));


const mapStateToProps = (state, ownProps) => ({value: state.skills.searchValue});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (e) => {
        dispatch(changeSkillSearchValue(e.target.value))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SkillSearch);
