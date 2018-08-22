import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as UserState from '../store/User';

type UserProps =
	UserState.UserState
	& typeof UserState.actionCreators;

class MainNav extends React.Component<UserProps, {}> {
	componentDidMount() {
		this.props.getCurrentUser();
	}

	private onLogout(e: React.MouseEvent<HTMLDivElement>) {
		this.props.logOut();
	}

	public render() {
		var userData = this.props.refreshToken
			? <div>
				<hr />
				<img className='user-avatar' src={this.props.user.avatarUrl} />
				<div className='user-name'>
					{this.props.user.name}
				</div>
				<div className='logout' onClick={(e) => this.onLogout(e)}>
					Log out
				</div>
			</div> : null;

		return <div className='main-nav'>
			<div className='logo'></div>
			<div className='app-name'>
				The Idea Pool
			</div>
			{ userData }
		</div>;
    }
}

const MainNavContainer = connect(
	(state: ApplicationState) => state.user,
	UserState.actionCreators
)(MainNav);

export default MainNavContainer;