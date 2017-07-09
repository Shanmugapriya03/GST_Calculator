import React from 'react';
export default class ItemHead extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-3">
					Name
				</div>
				<div className="col-md-4">
					Price
				</div>
				<div className="col-md-3">
					After Gst
				</div>
				<div className="col-md-2">
					Percent
				</div>
			</div>
		);
	}
}
