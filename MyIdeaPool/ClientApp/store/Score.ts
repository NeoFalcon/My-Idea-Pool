import { Reducer, Action } from "redux";

export interface Score {
	ideaId: string;
	scoreValue: number;
	scoreChangeAction: Function;
}

export const actionCreators = {
};

export const reducer: Reducer<Score> = (state: Score, incomingAction: Action) => {
	return state;
};