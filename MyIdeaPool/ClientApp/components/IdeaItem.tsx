import * as React from "react";
import ScoreControl from "./ScoreControl";
import DeleteModal from './DeleteModal';
import * as Idea from '../store/Idea';
import { ChangeEvent } from "react";

type IdeaProps =
	Idea.Idea
	& typeof Idea.actionCreators;

export default class IdeaItem extends React.Component<IdeaProps, {}> {
	public render() {
		var ideaNameElement = <div className='idea-name'>{this.props.content}</div>;
		var impactScoreElement = <div className='impact-score'>{this.props.impact}</div>;
		var easeScoreElement = <div className='ease-score'>{this.props.ease}</div>;
		var confidenceScoreElement = <div className='confidence-score'>{this.props.confidence}</div>;
		var averageScoreElement = <div className='score-average'>{this.props.averageScore}</div>;
		var firstActionElement = <div className='edit-idea'
			onClick={(e) => this.props.editIdeaAction(e, this.props.ideaId)}></div>;
		var secondActionElement = <div className='delete-idea'
			data-toggle='modal'
			data-target={'#delete-idea-modal-' + this.props.ideaId}
			data-backdrop='false'
			data-keyboard='false'></div>;
		if (this.props.isEditMode) {
			ideaNameElement = <input className='form-control' type='text' required defaultValue={this.props.content} onChange={(e) => this.props.ideaNameChangeAction(e, this.props.ideaId)} />;
			impactScoreElement = <ScoreControl ideaId={this.props.ideaId} scoreValue={this.props.impact} scoreChangeAction={this.props.impactScoreChangeAction} />;
			easeScoreElement = <ScoreControl ideaId={this.props.ideaId} scoreValue={this.props.ease} scoreChangeAction={this.props.easeScoreChangeAction} />;
			confidenceScoreElement = <ScoreControl ideaId={this.props.ideaId} scoreValue={this.props.confidence} scoreChangeAction={this.props.confidenceScoreChangeAction} />;
			firstActionElement = <div className='confirm-add' onClick={(e) => this.props.confirmEditIdeaAction(e, this.props.ideaId)}></div>;
			secondActionElement = <div className='cancel-add' onClick={(e) => this.props.cancelEditIdeaAction(e, this.props.ideaId)}></div>;
		}

		var validationErrorElement = null;
		if (this.props.validationErrorMessage) {
			validationErrorElement = <span className='form-validation-errors'>
				{this.props.validationErrorMessage}
			</span>;
		}

		return <tr className='idea'
			onMouseOver={(e) => this.props.mouseOverAction(e, this.props.ideaId)}
			onMouseLeave={(e) => this.props.mouseLeaveAction(e, this.props.ideaId)}>
			<td>
				<div className='dot'></div>
				<DeleteModal ideaId={this.props.ideaId}
					deleteAction={this.props.deleteIdeaAction} />
			</td>
			<td>
				{ideaNameElement}
				{validationErrorElement}
			</td>
			<td>
				{impactScoreElement}
			</td>
			<td>
				{easeScoreElement}
			</td>
			<td>
				{confidenceScoreElement}
			</td>
			<td>
				{averageScoreElement}
			</td>
			<td className={'actions ' + (this.props.isEditMode ? 'editing' : '')}>
				<div className={ this.props.isEditMode || this.props.areActionsVisible ? 'opaque' : 'transparent' }>
					{firstActionElement}
					{secondActionElement}
				</div>
			</td>
		</tr>;
	}
}