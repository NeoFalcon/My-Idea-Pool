import * as React from "react";
import * as Modal from '../store/Modal';

type ModalProps =
	Modal.Modal
	& typeof Modal.actionCreators;

export default class DeleteModal extends React.Component<ModalProps, {}> {
	public render() {
		return <div id={'delete-idea-modal-' + this.props.ideaId} className='modal fade' role='dialog'>
			<div className='modal-dialog modal-sm modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h2 className='modal-title'>
							Are you sure?
						</h2>
					</div>
					<div className='modal-body'>
						This idea will be permanently deleted.
					</div>
					<div className='modal-footer'>
						<div className='close-modal' data-dismiss='modal'>Cancel</div>
						<div className='delete-idea' data-dismiss='modal' onClick={(e) => this.props.deleteAction(e, this.props.ideaId)}>Ok</div>
					</div>
				</div>
			</div>
		</div>;
	}
}