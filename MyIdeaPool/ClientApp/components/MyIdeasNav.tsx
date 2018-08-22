import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as UserState from '../store/User';

type UserProps =
	UserState.UserState
	& typeof UserState.actionCreators;

class MyIdeasNav extends React.Component<UserProps, {}> {
	componentDidMount() {
		this.props.getCurrentUser();
	}

	public render() {
		var myIdeasElements = this.props.refreshToken
			? <div className='my-ideas-nav'>
				<h2>My Ideas</h2>
				<div className='add-idea-button'></div>
				<hr />
			</div>: null;

		return <div>
			{myIdeasElements}
		</div>;
	}
}

const MyIdeasNavContainer = connect(
	(state: ApplicationState) => state.user,
	UserState.actionCreators
)(MyIdeasNav);

export default MyIdeasNavContainer;
