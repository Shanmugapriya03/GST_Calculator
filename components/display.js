import React from 'react';

export default class Display extends React.Component{
    render(){
        return(
            <div className="row item">
				<center className="col-lg-2">
					<input type="checkbox" onClick={(e) => this.props.onselect(this.props.keyProp, e)} />
				</center>
				<div className="col-lg-4">
                	<p>{this.props.d["product-label"]}</p>
				</div>
                <div className="col-lg-3">
                	<p>{this.props.d["old-rate"]}%</p>
				</div>
                <div className="col-lg-3">
                	<p>{this.props.d["gst-rate"]}%</p>
				</div>
            </div>
        );
    }
}
