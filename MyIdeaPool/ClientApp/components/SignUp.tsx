import * as React from 'react';
import { RouteComponentProps, NavLink } from 'react-router-dom';
import * as UserState from '../store/User';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { FormEvent, ChangeEvent } from 'react';

type UserProps =
	UserState.UserState
	& typeof UserState.actionCreators;

class SignUp extends React.Component<UserProps, {}> {
	private onNameChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.user.name = e.target.value;
	}

	private onEmailChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.user.email = e.target.value;
	}

	private onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
		this.props.user.password = e.target.value;
	}

	private onFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		this.props.signUp(this.props.user);
	}

    public render() {
		return <div className='flex-center full-height'>
			<div className='registration'>
				<h1>Sign Up</h1>
				<form onSubmit={(e) => this.onFormSubmit(e)}>
					<input name='name' className='form-control' type='text' placeholder='Name' defaultValue={this.props.user.name} onChange={(e) => this.onNameChange(e)} />
					<input name='email' className='form-control' type='text' placeholder='Email' defaultValue={this.props.user.email} onChange={(e) => this.onEmailChange(e)} />
					<input name='password' className='form-control' type='password' placeholder='Password' defaultValue={this.props.user.password} onChange={(e) => this.onPasswordChange(e)} />
					<div className='row flex-center'>
						<div className='col-md-4'>
							<button type='submit'>
								Sign Up
							</button>
						</div>
						<div className='col-md-8 text-right'>
							Already have an account? <a href='/login'>Log in</a>
						</div>
					</div>
				</form>
				<span className='form-validation-errors'>{this.props.signupValidationErrorMessage}</span>
			</div>
        </div>;
    }
}

export default connect(
	(state: ApplicationState) => state.user,
	UserState.actionCreators
)(SignUp) as typeof SignUp;
