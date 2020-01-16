import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './ReduxForm.scss';

class ReduxForm extends Component {
    // label прокинут из label={"Enter title"}
    renderInput = ({input, meta, label, mandatory}) => {
        // console.log("control ", input); // инфа о контроле
        // console.log("metaInfo ", meta); // инфа о метадате

        const inputClassName = `redux-form__input ${meta.visited && meta.error ? '_error' : ''}`;

        return (
            <>
                {/*<input type="text" onChange={control.onChange} value={control.value}/>*/}
                {/*тоже что и*/}
                <div className="redux-form__field"
                >
                    <label
                        htmlFor={meta.form + input.name}>
                        {label}
                        {this.renderMandatory(mandatory)}
                    </label>
                    <input
                        autoComplete="off"
                        id={meta.form + input.name}
                        type="text"
                        {...input}
                        className={inputClassName}
                    />
                    <p className="redux-form__error-message">
                        {meta.visited && meta.error}
                    </p>
                </div>
            </>
        );
    };

    renderMandatory = (mandatory) => {
        return mandatory ? <sup style={{color: 'darkRed'}}>*</sup> : null;
    };

    onSubmit(formValues) {
        console.log("formValues ", formValues);
    }

    render() {
        console.log("reduxForm props ", this.props);

        const {handleSubmit, valid} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                {/*name - обязательное имя филда*/}
                <Field name="title" component={this.renderInput} label={"Enter title"} mandatory/>
                <Field name="description" component={this.renderInput} label={"Enter description"}/>
                <button type="submit" disabled={!valid}>Submit</button>
            </form>
        );
    }
}


// Валидация
// если вернуть пустой объект то форма валидна
// для ошибки возвращаю объект с ключ значение, где ключ - имя поля, значение error message
const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "title should be filled"
    }

    return errors;
};


// после того как сконнектил этот компонент с формой у него появилась куча свойств
export default reduxForm({
    // тут указываю название формы
    form: "reduxFormSample",
    validate
})(ReduxForm);
