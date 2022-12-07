import React, {ComponentType, FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AppStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/auth_reducer";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



const Login = (props: mapDispatchToPropsType) => {
    const onSubmit = (formData: LoginFormDataType) => {
        props.loginUserTC(formData);
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
                <Field placeholder={'email'} name={'email'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

let mapStateToProps = (state: AppStateType) => {
    return {
    }
}

type mapDispatchToPropsType = {
    loginUserTC: (userData: LoginFormDataType) => void
}

const ReduxLoginForm = reduxForm<LoginFormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default compose<ComponentType>(
    connect(mapStateToProps, {loginUserTC}),
)(Login);