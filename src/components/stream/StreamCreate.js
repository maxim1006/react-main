import React, {Component} from "react";
import {Field, reduxForm, reset} from "redux-form";
import {connect} from "react-redux";
import {createStream} from "../../store/actions";

class StreamCreate extends Component {
    render() {
        const {handleSubmit, valid} = this.props;

        return (
            <form
                onSubmit={handleSubmit(this.onSubmit)}
            >
                <Field
                    component={this.renderTextField}
                    name="title"
                    label={"Enter title"}
                    mandatory
                />
                <Field
                    component={this.renderMemoField}
                    name="description"
                    label={"Enter description"}
                    mandatory={false}
                />
                <button
                    type="submit"
                    disabled={!valid}
                >Submit
                </button>
            </form>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
        this.props.dispatch(reset("streamCreate"));
    };

    renderTextField = ({input, meta, label, mandatory}) => {
        return (
            <>
                <label htmlFor={meta.form + input.name}>
                    {label}
                    {mandatory && <sup>*</sup>}
                </label>
                <input
                    type="text"
                    autoComplete="off"
                    id={meta.form + input.name}
                    {...input}
                />
                <p style={{color: "red"}}>
                    {meta.visited && meta.error}
                </p>
            </>
        );
    };

    renderMemoField = ({input, meta, label, mandatory}) => {
        return (
            <>
                <label htmlFor={meta.form + input.name}>
                    {label}
                    {mandatory && <sup>*</sup>}
                </label>
                <textarea
                    id={meta.form + input.name}
                    {...input}
                />
                <p style={{color: "red"}}>
                    {meta.touched && meta.error}
                </p>
            </>
        );
    };
}


function validate(formValues) {
    const errors = {};

    if (!formValues.title) {
        errors.title = "Please fill title";
    }

    return errors;
}


const reduxFormWrapped = reduxForm({
    form: "streamCreate",
    validate
})(StreamCreate);


export default connect(null, {createStream})(reduxFormWrapped);
