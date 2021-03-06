import * as React from 'react';
import { RouteComponentProps, NavLink } from 'react-router-dom';
import { ApplicationState } from '../store';
import * as UserState from '../store/User';
import { connect } from 'react-redux';
import { ChangeEvent, FormEvent } from 'react';

type UserProps =
	UserState.UserState
	& typeof UserState.actionCreators;

class Login extends React.Component<UserProps, {}> {
	private onEmailChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.user.email = e.target.value;
	}

	private onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.user.password = e.target.value;
	}

	private onFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		this.props.logIn(this.props.user);
	}

    public render() {
		return <div className='flex-center full-height'>
			<div className='registration'>
				<h1>Log In</h1>
				<form onSubmit={(e) => this.onFormSubmit(e)}>
					<input className='form-control' type='text' placeholder='Email' defaultValue={this.props.user.email} onChange={(e) => this.onEmailChange(e)} />
					<input className='form-control' type='password' placeholder='Password' defaultValue={this.props.user.password} onChange={(e) => this.onPasswordChange(e)} />
					<div className='row flex-center'>
						<div className='col-md-4'>
							<button type='submit'>
								Log In
							</button>
						</div>
						<div className='col-md-8 text-right'>
							Don't have an account? <a href='/sign-up'>Create an account</a>
						</div>
					</div>
				</form>
				<span className='form-validation-errors'>{this.props.loginValidationErrorMessage}</span>
			</div>
        </div>;
    }
}

export default connect(
	(state: ApplicationState) => state.user,
	UserState.actionCreators
)(Login) as typeof Login;
