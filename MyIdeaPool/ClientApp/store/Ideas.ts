import { RouterAction, push } from "react-router-redux";
import { AppThunkAction } from "ClientApp/store";
import { Reducer, Action } from "redux";
import { addTask } from "domain-task";
import "isomorphic-fetch";
import { Idea } from "./Idea";

export interface IdeasState {
	ideas: Idea[];
	isLoading: boolean;
}

interface ValidationErrorAction {
	type: 'VALIDATION_ERROR';
}

interface AddIdeaAction {
	type: 'ADD_IDEA';
}

interface EditIdeaAction {
	type: 'EDIT_IDEA';
}

interface DeleteIdeaAction {
	type: 'DELETE_IDEA';
	ideas: Idea[];
}

interface CancelEditIdeaAction {
	type: 'CANCEL_EDIT_IDEA';
	ideas: Idea[];
}

interface ConfirmEditIdeaAction {
	type: 'CONFIRM_EDIT_IDEA';
}

interface RequestIdeasAction {
	type: 'REQUEST_IDEAS';
	ideas: Idea[];
}

interface RequestNoIdeasAction {
	type: 'REQUEST_NO_IDEAS';
}

interface RequestingIdeasAction {
	type: 'REQUESTING_IDEAS';
}

type KnownAction = ValidationErrorAction | AddIdeaAction | EditIdeaAction | DeleteIdeaAction | CancelEditIdeaAction | ConfirmEditIdeaAction | RequestIdeasAction | RequestNoIdeasAction | RequestingIdeasAction;
type ImportedAction = RouterAction;

export const actionCreators = {
	addIdea: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		var ideas = getState().ideas.ideas;
		ideas.unshift({ ...emptyIdea });
		for (var i = 0; i < ideas.length; i++) {
			var idea = ideas[i];
			if (isNaN(parseInt(idea.ideaId))) {
				break;
			}

			idea.ideaId = '' + i;
		}

		dispatch({ type: 'ADD_IDEA' });
	},
	editIdea: (ideaId: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
		var idea = getState().ideas.ideas.find(x => x.ideaId === ideaId);
		if (idea) {
			idea.isEditMode = true;
			idea.oldContent = idea.content;
			idea.oldImpact = idea.impact;
			idea.oldEase = idea.ease;
			idea.oldConfidence = idea.confidence;
			idea.oldAverageScore = idea.averageScore;
		}

		dispatch({ type: 'EDIT_IDEA' });
	},
	deleteIdea: (ideaId: string): AppThunkAction<any> => (dispatch, getState) => {
		var userAccessToken = window.sessionStorage.getItem('userAccessToken');
		if (!userAccessToken) {
			dispatch(push(`/login`));
			window.location.reload();
		}

		var apiMethodUrl = `https://small-project-api.herokuapp.com/ideas/${ideaId}`;
		var apiMethodType = `delete`;
		let fetchTask = fetch(apiMethodUrl, {
			method: apiMethodType,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'X-Access-Token': userAccessToken as string
			}
		})
		.then(data => {
			var ideas = getState().ideas.ideas.filter(x => x.ideaId !== ideaId);
			dispatch({ type: 'DELETE_IDEA', ideas: ideas });
		});

		addTask(fetchTask);
	},
	cancelEditIdea: (ideaId: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
		var ideas = getState().ideas.ideas;
		var idea = ideas.find(x => x.ideaId === ideaId);
		if (idea && idea.createdAt) {
			idea.isEditMode = false;
			idea.validationErrorMessage = undefined;
			idea.content = idea.oldContent || '';
			idea.impact = idea.oldImpact || 10;
			idea.ease = idea.oldEase || 10;
			idea.confidence = idea.oldConfidence || 10;
			idea.averageScore = idea.oldAverageScore || 10;
		}
		else {
			ideas = ideas.filter(x => x.ideaId !== ideaId);
		}

		dispatch({ type: 'CANCEL_EDIT_IDEA', ideas: ideas });
	},
	confirmEditIdea: (ideaId: string): AppThunkAction<any> => (dispatch, getState) => {
		var userAccessToken = window.sessionStorage.getItem('userAccessToken');
		if (!userAccessToken) {
			dispatch(push(`/login`));
			window.location.reload();
		}

		var idea = getState().ideas.ideas.find(x => x.ideaId === ideaId);
		if (!idea) {
			dispatch({ type: 'VALIDATION_ERROR' });
		}
		else if (!idea.content || idea.content === '') {
			idea.validationErrorMessage = 'content is required';
			dispatch({ type: 'VALIDATION_ERROR' });
		}
		else {
			var apiMethodUrl = `https://small-project-api.herokuapp.com/ideas`;
			var apiMethodType = `post`;
			if (idea.createdAt) {
				apiMethodUrl += `/${ideaId}`;
				apiMethodType = `put`;
			}

			idea.isEditMode = false;
			idea.areActionsVisible = false;

			let fetchTask = fetch(apiMethodUrl, {
				method: apiMethodType,
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'X-Access-Token': userAccessToken as string
				},
				body: JSON.stringify(idea)
			})
			.then(response => response.json() as Promise<any>)
			.then(data => {
				if (data.reason && idea) {
					idea.validationErrorMessage = data.reason;
					idea.isEditMode = true;
					idea.areActionsVisible = true;
					dispatch({ type: 'VALIDATION_ERROR' });

					if (data.reason === 'you can not pass!') {
						window.sessionStorage.removeItem('userAccessToken');
						dispatch(push(`/login`));
						window.location.reload();
					}
				}
				else if (data.id && idea) {
					idea.ideaId = data.id;
					idea.createdAt = data.created_at;
					dispatch({ type: 'CONFIRM_EDIT_IDEA' });
				}
				else if (idea) {
					idea.validationErrorMessage = 'Unknown error';
					idea.isEditMode = true;
					idea.areActionsVisible = true;
					dispatch({ type: 'VALIDATION_ERROR' });
				}
				});

			addTask(fetchTask);
		}
	},
	getIdeas: (): AppThunkAction<any> => (dispatch, getState) => {
		dispatch({ type: 'REQUESTING_IDEAS' });

		var userAccessToken = window.sessionStorage.getItem('userAccessToken');
		if (!userAccessToken) {
			dispatch(push(`/login`));
			window.location.reload();
		}

		var apiMethodUrl = `https://small-project-api.herokuapp.com/ideas`;
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
			if (data.reason) {
				window.sessionStorage.removeItem('userAccessToken');
				dispatch(push(`/login`));
				window.location.reload();
			}
			else if (data.length > 0) {
				var ideas: Idea[] = [];
				for (let i of data) {
					var idea: Idea = {
						ideaId: i.id,
						content: i.content,
						impact: i.impact,
						ease: i.ease,
						confidence: i.confidence,
						averageScore: Math.round(i.average_score * 10) / 10,
						createdAt: i.created_at,
						isEditMode: false,
						areActionsVisible: false,
						cancelEditIdeaAction: emptyFunction,
						confirmEditIdeaAction: emptyFunction,
						ideaNameChangeAction: emptyFunction,
						impactScoreChangeAction: emptyFunction,
						easeScoreChangeAction: emptyFunction,
						confidenceScoreChangeAction: emptyFunction,
						mouseOverAction: emptyFunction,
						mouseLeaveAction: emptyFunction,
						editIdeaAction: emptyFunction,
						deleteIdeaAction: emptyFunction
					};

					ideas.push(idea);
				}
				
				dispatch({ type: 'REQUEST_IDEAS', ideas: ideas });
			}
			else {
				dispatch({ type: 'REQUEST_NO_IDEAS' });
			}
		});

		addTask(fetchTask);
	}
};

const unloadedState: IdeasState = { ideas: [], isLoading: true };
const emptyFunction: Function = function () { };
const emptyIdea: Idea = {
	ideaId: '1', content: '', impact: 10, ease: 10, confidence: 10, averageScore: 10, isEditMode: true, areActionsVisible: false,
	cancelEditIdeaAction: emptyFunction, confirmEditIdeaAction: emptyFunction, ideaNameChangeAction: emptyFunction,
	impactScoreChangeAction: emptyFunction, easeScoreChangeAction: emptyFunction, confidenceScoreChangeAction: emptyFunction,
	mouseOverAction: emptyFunction, mouseLeaveAction: emptyFunction, editIdeaAction: emptyFunction, deleteIdeaAction: emptyFunction
};

export const reducer: Reducer<IdeasState> = (state: IdeasState, incomingAction: Action) => {
	const action = incomingAction as KnownAction;
	switch (action.type) {
		case 'VALIDATION_ERROR':
			return {
				ideas: state.ideas,
				isLoading: false
			};
		case 'ADD_IDEA':
			return {
				ideas: state.ideas,
				isLoading: false
			};
		case 'EDIT_IDEA':
			return {
				ideas: state.ideas,
				isLoading: false
			};
		case 'DELETE_IDEA':
			return {
				ideas: action.ideas,
				isLoading: false
			};
		case 'CANCEL_EDIT_IDEA':
			return {
				ideas: action.ideas,
				isLoading: false
			};
		case 'CONFIRM_EDIT_IDEA':
			return {
				ideas: state.ideas,
				isLoading: false
			};
		case 'REQUEST_IDEAS':
			return {
				ideas: action.ideas,
				isLoading: false
			};
		case 'REQUEST_NO_IDEAS':
			return {
				ideas: [],
				isLoading: false
			};
		case 'REQUESTING_IDEAS':
			return {
				ideas: state.ideas,
				isLoading: true
			};
		default:
			const exhaustiveCheck: never = action;
	}

	return state || unloadedState;
};