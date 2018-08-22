import { connect } from "react-redux";
import { ApplicationState } from "../store";
import * as UserState from '../store/User';
import * as React from "react";

type UserProps =
	UserState.UserState
	& typeof UserState.actionCreators;

class Home extends React.Component<UserProps, {}> {
	componentDidMount() {
		this.props.getCurrentUser(true);
	}

	public render() {
		return <div></div>;
	}
}

export default connect(
	(state: ApplicationState) => state.user,
	UserState.actionCreators
)(Home) as typeof Home;