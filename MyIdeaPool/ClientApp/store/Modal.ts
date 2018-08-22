import { Reducer, Action } from "redux";

export interface Modal {
	ideaId: string;
	deleteAction: Function;
}

export const actionCreators = {
};

export const reducer: Reducer<Modal> = (state: Modal, incomingAction: Action) => {
	return state;
};