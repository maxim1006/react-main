import React, {memo} from "react";
import {connect} from "react-redux";
import SkillsItem from "../item/SkillsItem";
import {changeSkillStatus, removeSkill} from "../../../store/actions";

const SkillList = memo(({items, removeItem, onStatusChange}) => (
    <ul className="skills-list">
        {Object.values(items).map(item => (
            <li key={item.id}>
                <SkillsItem {...item} />

                {/*UTF-8 dingbats*/}
                <span onClick={_ => removeItem(item)}>&#10008;</span>

                <input
                    type="checkbox"
                    checked={item.status === "done"}
                    ref={el => el && (el.indeterminate = item.status === "in progress")}
                    onChange={_ => onStatusChange(item)}
                />
            </li>
        ))}
    </ul>
));


const mapStateToProps = (state, ownProps) => ({
    items: state.skills.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeItem: (item) => {
        dispatch(removeSkill(item))
    },
    onStatusChange: (item) => {
        dispatch(changeSkillStatus(item))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillList);
