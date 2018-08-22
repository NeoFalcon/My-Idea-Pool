import * as React from 'react';
import MainNavContainer from './MainNav';

export default class Layout extends React.Component<{}, {}> {
	public render() {
		return <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
					<MainNavContainer />
                </div>
				<div className='col-md-9'>
                    { this.props.children }
                </div>
			</div>
        </div>;
    }
}