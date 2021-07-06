import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';

class StreamForm extends Component {
    render() {
        const { handleSubmit, valid } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field component={this.renderTextField} name="title" label="Enter title" mandatory />
                <Field
                    component={this.renderMemoField}
                    name="description"
                    label="Enter description"
                    mandatory={false}
                />
                <button type="submit" disabled={!valid}>
                    Submit
                </button>
            </form>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
        // clear form fields
        this.props.dispatch(reset('streamCreate'));
    };

    renderTextField = ({ input, meta, label, mandatory }) => {
        // input и meta - это набор свойств от redux-form для полей, прикольно что input даже initialValue есть
        // input - инфаа об инпуте
        // meta - метаинфа о филде
        // console.log(input, meta);

        return (
            <>
                <label htmlFor={meta.form + input.name}>
                    {label}
                    {mandatory && <sup>*</sup>}
                </label>
                <input type="text" autoComplete="off" id={meta.form + input.name} {...input} />
                <p style={{ color: 'red' }}>{meta.visited && meta.error}</p>
            </>
        );
    };

    renderMemoField = ({ input, meta, label, mandatory }) => {
        return (
            <>
                <label htmlFor={meta.form + input.name}>
                    {label}
                    {mandatory && <sup>*</sup>}
                </label>
                <textarea id={meta.form + input.name} {...input} />
                <p style={{ color: 'red' }}>{meta.touched && meta.error}</p>
            </>
        );
    };
}

function validate(formValues) {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please fill title';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate,
})(StreamForm);
