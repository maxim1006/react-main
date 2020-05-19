import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { addSkill, changeSkillSearchValue } from "../../../store/actions";
import customAxios from "../../../common/api/axios";

const SkillSearch = memo(({ addSkill, value, ...restProps }) => {
    const cancelAddSkillRequest = customAxios.CancelToken.source();

    useEffect(() => {
        return () => {
            cancelAddSkillRequest.cancel("SkillSearch add Skill canceled");
        };
    }, [value]);

    const onAddSkill = () => addSkill(cancelAddSkillRequest, value);

    return (
        <div className="skill-search">
            <input type="text" {...restProps} />
            <button type="button" onClick={onAddSkill}>
                Add skill
            </button>
        </div>
    );
});

const mapStateToProps = (state, ownProps) => ({
    value: state.skills.searchValue
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: e => {
        dispatch(changeSkillSearchValue(e.target.value));
    },
    addSkill: (cancelAddSkillRequest, value) => {
        dispatch(addSkill(value, cancelAddSkillRequest.token));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillSearch);
