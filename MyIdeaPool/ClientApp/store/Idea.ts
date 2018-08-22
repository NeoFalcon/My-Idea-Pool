import { Reducer, Action } from "redux";

export interface Idea {
	ideaId: string;
	content: string;
	impact: number;
	ease: number;
	confidence: number;
	averageScore: number;
	oldContent?: string;
	oldImpact?: number;
	oldEase?: number;
	oldConfidence?: number;
	oldAverageScore?: number;
	createdAt?: number;
	isEditMode: boolean;
	validationErrorMessage?: string;
	areActionsVisible: boolean;
	cancelEditIdeaAction: Function;
	confirmEditIdeaAction: Function;
	ideaNameChangeAction: Function;
	impactScoreChangeAction: Function;
	easeScoreChangeAction: Function;
	confidenceScoreChangeAction: Function;
	mouseOverAction: Function;
	mouseLeaveAction: Function;
	editIdeaAction: Function;
	deleteIdeaAction: Function;
}

export const actionCreators = {
};

export const reducer: Reducer<Idea> = (state: Idea, incomingAction: Action) => {
	return state;
};