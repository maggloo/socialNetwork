import React, {ComponentType, FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/auth_reducer";
import {compose} from "redux";
import {Input} from "../common/formsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import style from "../common/formsControls/FormControls.module.css"


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.loginUserTC(formData);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export type LoginFormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<LoginFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'}
                       component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
             {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


type mapDispatchToPropsType = {
    loginUserTC: (userData: LoginFormDataType) => void
}

type MapStateToPropsType = {
    isAuth: boolean
}

type LoginPropsType = mapDispatchToPropsType & MapStateToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.data.isAuth,
    }
}

const ReduxLoginForm = reduxForm<LoginFormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default compose<ComponentType>(
    connect(mapStateToProps, {loginUserTC}),
)(Login);