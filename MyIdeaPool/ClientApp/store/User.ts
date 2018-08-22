import { addTask } from "domain-task";
import { RouterAction, push, routerActions } from "react-router-redux";
import { AppThunkAction } from "ClientApp/store";
import { Action, Reducer } from "redux";
import "isomorphic-fetch";

export interface User {
	name: string;
	email: string;
	password?: string;
	avatarUrl?: string;
}

export interface UserState {
	user: User;
	refreshToken?: string;
	signupValidationErrorMessage?: string;
	loginValidationErrorMessage?: string;
}

interface SignupValidationErrorAction {
	type: 'SIGNUP_VALIDATION_ERROR';
	errorMessage: string;
}

interface LoginValidationErrorAction {
	type: 'LOGIN_VALIDATION_ERROR';
	errorMessage: string;
}

interface RequestNoUserAction {
	type: 'REQUEST_NO_USER';
}

interface RequestUserAction {
	type: 'REQUEST_USER';
	user: User;
	refreshToken: string;
}

type KnownAction = SignupValidationErrorAction | LoginValidationErrorAction | RequestNoUserAction | RequestUserAction;
type ImportedAction = RouterAction;

export const actionCreators = {
	signUp: (user: User): AppThunkAction<any> => (dispatch, getState) => {
		var apiMethodUrl = `https://small-project-api.herokuapp.com/users`;
		var apiMethodType = `post`;
		let fetchTask = fetch(apiMethodUrl, {
			method: apiMethodType,
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json() as Promise<any>)
		.then(data => {
			if (data.reason || !data.refresh_token) {
				dispatch({ type: 'SIGNUP_VALIDATION_ERROR', errorMessage: data.reason });
			}
			else {
				window.sessionStorage.setItem('userRefreshToken', data.refresh_token);
				window.sessionStorage.setItem('userAccessToken', data.jwt);
				dispatch(push(`/ideas`));
				window.location.reload();
			}
		});

		addTask(fetchTask);
	},
	logIn: (user: User): AppThunkAction<any> => (dispatch, getState) => {
		var apiMethodUrl = `https://small-project-api.herokuapp.com/access-tokens`;
		var apiMethodType = `post`;
		let fetchTask = fetch(apiMethodUrl, {
			method: apiMethodType,
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json() as Promise<any>)
		.then(data => {
			if (data.reason || !data.refresh_token) {
				dispatch({ type: 'LOGIN_VALIDATION_ERROR', errorMessage: data.reason });
			}
			else {
				window.sessionStorage.setItem('userRefreshToken', data.refresh_token);
				window.sessionStorage.setItem('userAccessToken', data.jwt);
				dispatch(push(`/ideas`));
				window.location.reload();
			}
		});

		addTask(fetchTask);
	},
	logOut: (): AppThunkAction<any> => (dispatch, getState) => {
		window.sessionStorage.clear();
		dispatch(push(`/login`));
		window.location.reload();
	},
	getCurrentUser: (willRedirect?: boolean): AppThunkAction<any> => (dispatch, getState) => {
		var userAccessToken = window.sessionStorage.getItem('userAccessToken');
		if (!userAccessToken) {
			dispatch({ type: 'REQUEST_NO_USER' });

			if (willRedirect === true) {
				dispatch(push(`/sign-up`));
				window.location.reload();
			}
		}

		var apiMethodUrl = `https://small-project-api.herokuapp.com/me`;
		var apiMethodType = `get`; 
		let fetchTask = fetch(apiMethodUrl, {
			method: apiMethodType,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'X-Access-Token': userAccessToken as string
			}
		})
		.then(response => response.json() as Promise<any>)
		.then(data => {
			if (!data.reason && data.email && window.sessionStorage.getItem('userRefreshToken')) {
				var user: User = {
					name: data.name,
					email: data.email,
					avatarUrl: data.avatar_url
				};

				var refreshToken = window.sessionStorage.getItem('userRefreshToken') as string;
				dispatch({ type: 'REQUEST_USER', user: user, refreshToken: refreshToken });

				if (willRedirect === true) {
					dispatch(push(`/ideas`));
					window.location.reload();
				}
			}
			else {
				window.sessionStorage.removeItem('userRefreshToken');
				dispatch({ type: 'REQUEST_NO_USER' });

				if (willRedirect === true) {
					dispatch(push(`/sign-up`));
					window.location.reload();
				}
			}
		});

		addTask(fetchTask);
	}
};

const emptyUser: User = { name: '', email: '' }
const unloadedState: UserState = { user: emptyUser };

export const reducer: Reducer<UserState> = (state: UserState, incomingAction: Action) => {
	const action = incomingAction as KnownAction;
	switch (action.type) {
		case 'SIGNUP_VALIDATION_ERROR':
			return {
				user: state.user,
				signupValidationErrorMessage: action.errorMessage
			};
		case 'LOGIN_VALIDATION_ERROR':
			return {
				user: state.user,
				loginValidationErrorMessage: action.errorMessage
			};
		case 'REQUEST_NO_USER':
			return {
				user: emptyUser,
				refreshToken: undefined
			};
		case 'REQUEST_USER':
			return {
				user: action.user,
				refreshToken: action.refreshToken
			};
		default:
			const exhaustiveCheck: never = action;
	}

	return state || unloadedState;
};