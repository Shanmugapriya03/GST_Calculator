import React from 'react';

export default class SelectedItem extends React.Component{
	constructor(){
		super();
	}
    render(){
        return(
            <div className="row item">
				<div className="col-lg-8">
                	<p>{this.props.d["product-label"]}</p>
				</div>
                <div className="col-lg-4">
                	<p><input type="number"  value={this.props.d["currentVal"]} onChange={(e) => this.props.changeVal(this.props.keyProp, e)}/></p>
				</div>
            </div>
        );
    }
}
