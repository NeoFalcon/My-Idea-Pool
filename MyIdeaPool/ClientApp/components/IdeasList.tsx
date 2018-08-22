import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as IdeasState from '../store/Ideas';
import { Idea } from '../store/Idea';
import GotIdeas from './GotIdeas';
import IdeaItem from './IdeaItem';
import { ChangeEvent, MouseEvent } from 'react';

type IdeasProps =
	IdeasState.IdeasState
	& typeof IdeasState.actionCreators;

class IdeasList extends React.Component<IdeasProps, {}> {
	componentDidMount() {
		this.onCancelEditIdea = this.onCancelEditIdea.bind(this);
		this.onConfirmEditIdea = this.onConfirmEditIdea.bind(this);
		this.onIdeaNameChange = this.onIdeaNameChange.bind(this);
		this.onImpactScoreChange = this.onImpactScoreChange.bind(this);
		this.onEaseScoreChange = this.onEaseScoreChange.bind(this);
		this.onConfidenceScoreChange = this.onConfidenceScoreChange.bind(this);
		this.onMouseOverIdea = this.onMouseOverIdea.bind(this);
		this.onMouseLeaveIdea = this.onMouseLeaveIdea.bind(this);
		this.onEditIdea = this.onEditIdea.bind(this);
		this.onDeleteIdea = this.onDeleteIdea.bind(this);
		this.props.getIdeas();
	}

	private selectIdeaById(ideaId: string) {
		return this.props.ideas.find(x => x.ideaId === ideaId);
	}

	private setAverageScore(idea: Idea) {
		var averageScore = (idea.impact + idea.ease + idea.confidence) / 3.0;
		idea.averageScore = Math.round(averageScore * 10) / 10;

		this.forceUpdate();
	}
	
	private onAddIdea(e: MouseEvent<HTMLDivElement>) {
		this.props.addIdea();

		this.forceUpdate();
	}

	private onCancelEditIdea(e: MouseEvent<HTMLDivElement>, ideaId: string) {
		this.props.cancelEditIdea(ideaId);

		this.forceUpdate();
	}

	private onConfirmEditIdea(e: MouseEvent<HTMLDivElement>, ideaId: string) {
		this.props.confirmEditIdea(ideaId);

		this.forceUpdate();
	}

	private onIdeaNameChange(e: ChangeEvent<HTMLInputElement>, ideaId: string) {
		var idea = this.selectIdeaById(ideaId);
		if (idea) {
			idea.content = e.target.value;
		}
	}

	private onImpactScoreChange(e: ChangeEvent<HTMLInputElement>, ideaId: string) {
		var idea = this.selectIdeaById(ideaId);
		var scoreValue = parseInt(e.target.value);
		if (idea && !isNaN(scoreValue)) {
			idea.impact = scoreValue;
			this.setAverageScore(idea);
		}
	}

	private onEaseScoreChange(e: ChangeEvent<HTMLInputElement>, ideaId: string) {
		var idea = this.selectIdeaById(ideaId);
		var scoreValue = parseInt(e.target.value);
		if (idea && !isNaN(scoreValue)) {
			idea.ease = scoreValue;
			this.setAverageScore(idea);
		}
	}

	private onConfidenceScoreChange(e: ChangeEvent<HTMLInputElement>, ideaId: string) {
		var idea = this.selectIdeaById(ideaId);
		var scoreValue = parseInt(e.target.value);
		if (idea && !isNaN(scoreValue)) {
			idea.confidence = scoreValue;
			this.setAverageScore(idea);
		}
	}

	private onMouseOverIdea(e: MouseEvent<HTMLDivElement>, ideaId: string) {
		var idea = this.selectIdeaById(ideaId);
		if (idea) {
			idea.areActionsVisible = true;

			this.forceUpdate();
		}
	}

	private onMouseLeaveIdea(e: MouseEvent<HTMLDivElement>, ideaId: string) {
		var idea = this.selectIdeaById(ideaId);
		if (idea) {
			idea.areActionsVisible = false;

			this.forceUpdate();
		}
	}

	private onEditIdea(e: MouseEvent<HTMLDivElement>, ideaId: string) {
		this.props.editIdea(ideaId);

		this.forceUpdate();
	}

	private onDeleteIdea(e: MouseEvent<HTMLDivElement>, ideaId: string) {
		this.props.deleteIdea(ideaId);

		this.forceUpdate();
	}
	
	public render() {
		var myIdeasNav = <div className='my-ideas-nav'>
			<h2>My Ideas</h2>
			<div className='add-idea-button' onClick={(e) => this.onAddIdea(e)}></div>
			<hr />
		</div>;

		var myIdeasElements = <div>
			<form>
				<table className='ideas-list' cellSpacing='3'>
					<thead>
						<tr>
							<td>&nbsp;</td>
							<td>&nbsp;</td>
							<td>Impact</td>
							<td>Ease</td>
							<td>Confidence</td>
							<td><b>Avg.</b></td>
							<td>&nbsp;</td>
						</tr>
					</thead>
					<tbody>
						{this.props.ideas.map((idea, index) => {
							return <IdeaItem key={idea.ideaId}
								ideaId={idea.ideaId}
								content={idea.content}
								impact={idea.impact}
								ease={idea.ease}
								confidence={idea.confidence}
								averageScore={idea.averageScore}
								isEditMode={idea.isEditMode}
								validationErrorMessage={idea.validationErrorMessage}
								areActionsVisible={idea.areActionsVisible}
								cancelEditIdeaAction={this.onCancelEditIdea}
								confirmEditIdeaAction={this.onConfirmEditIdea}
								ideaNameChangeAction={this.onIdeaNameChange}
								impactScoreChangeAction={this.onImpactScoreChange}
								easeScoreChangeAction={this.onEaseScoreChange}
								confidenceScoreChangeAction={this.onConfidenceScoreChange}
								mouseOverAction={this.onMouseOverIdea}
								mouseLeaveAction={this.onMouseLeaveIdea}
								editIdeaAction={this.onEditIdea}
								deleteIdeaAction={this.onDeleteIdea}
							/>;
						})}
					</tbody>
				</table>
			</form>
		</div>;

		if (this.props.isLoading) {
			myIdeasElements = <div></div>;
		}
		else if (this.props.ideas.length <= 0) {
			myIdeasElements = <div className='flex-center full-height'>
				<GotIdeas />
			</div>
		}

		return <div>
			{myIdeasNav}
			{myIdeasElements}
        </div>;
    }
}

export default connect(
	(state: ApplicationState) => state.ideas,
	IdeasState.actionCreators
)(IdeasList) as typeof IdeasList;