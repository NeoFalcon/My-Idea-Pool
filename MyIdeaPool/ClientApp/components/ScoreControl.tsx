import * as React from "react";
import * as Score from '../store/Score';

type ScoreProps =
	Score.Score
	& typeof Score.actionCreators;

export default class ScoreControl extends React.Component<ScoreProps, {}> {
	public render() {
		return <select className='form-control' defaultValue={this.props.scoreValue.toString()} onChange={(e) => this.props.scoreChangeAction(e, this.props.ideaId)}>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			<option>6</option>
			<option>7</option>
			<option>8</option>
			<option>9</option>
			<option>10</option>
		</select>;
	}
}